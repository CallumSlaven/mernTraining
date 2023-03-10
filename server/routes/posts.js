import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/post.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/post", verifyToken, getUserPosts);


/* UPDATE */
ReadableStreamDefaultController.patch("/:id/like", verifyToken, likePost);

export default router;