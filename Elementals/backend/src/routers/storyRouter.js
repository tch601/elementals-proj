import express from "express";
import { getStoriesHandler } from "../controllers/storyController.js";

const router = express.Router();

router.route("/").get(getStoriesHandler);

export default router;
