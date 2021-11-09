import express from "express";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("HELLO");
});
router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
