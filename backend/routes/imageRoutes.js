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

module.exports = router;