import express from "express";
import { getSeasonsHandler } from "../controllers/seasonController.js";

const router = express.Router();

router.route("/").get(getSeasonsHandler);

export default router;
