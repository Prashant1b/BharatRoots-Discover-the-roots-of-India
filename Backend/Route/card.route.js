import express from "express";
import { getCard, createCard } from "../Controller/Card.controller.js";

const router = express.Router();

router.get("/", getCard);
router.post("/", createCard);

export default router;
