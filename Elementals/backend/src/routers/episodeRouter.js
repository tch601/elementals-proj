import express from "express";
import { getEpisodesHandler, getEpisodesBySeasonHandler } from "../controllers/episodeController.js";

const router = express.Router();

router.route("/").get(getEpisodesHandler);
router.route("/season/:seasonId").get(getEpisodesBySeasonHandler);

export default router;
