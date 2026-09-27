const express = require("express");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const Image = require("../models/Image");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const image = new Image({
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      location: req.body.location,
      imageUrl: `/uploads/${req.file.filename}`,
      uploadedBy: decoded.id,
    });

    await image.save();

    res.status(201).json({
      message: "Image uploaded successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Upload failed",
    });
  }
});
router.get("/my-uploads", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const images = await Image.find({
      uploadedBy: decoded.id,
    }).sort({ createdAt: -1 });

    res.json(images);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch uploads",
    });
  }
});
router.patch("/approve/:id", async (req, res) => {
  await Image.findByIdAndUpdate(req.params.id, {
    status: "approved",
  });

  res.json({ message: "Image approved successfully" });
});
router.get("/all", async (req, res) => {
  try {
    const images = await Image.find().populate("uploadedBy", "name email");
    res.json(images);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch images",
    });
  }
});
router.patch("/reject/:id", async (req, res) => {
  await Image.findByIdAndDelete(req.params.id);

  res.json({ message: "Image rejected successfully" });
});
router.get("/approved", async (req, res) => {
  const images = await Image.find({ status: "approved" });
  res.json(images);
});
router.get("/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id).populate(
      "uploadedBy",
      "name email"
    );

    res.json(image);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch image" });
  }
});

module.exports = router;