import express from "express";
import meteorsController from "./meteorsController.js";

const router = express.Router();

router.get("/meteors", meteorsController);

export default router;