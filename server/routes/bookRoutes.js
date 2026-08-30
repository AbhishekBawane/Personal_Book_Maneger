const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const { getBooks, addBooks, updateBook, deleteBook, updateStatus} = require("../controllers/bookController")


router.get("/", authMiddleware, getBooks);

router.post("/", authMiddleware, addBooks);

router.put("/:id", authMiddleware, updateBook);

router.delete("/:id", authMiddleware, deleteBook);

router.patch("/:id/status", authMiddleware, updateStatus);

module.exports = router;