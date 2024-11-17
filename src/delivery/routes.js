import express from "express";
import meteorsController from "./meteorsController.js";
import marsPhotoController from "./marsPhotoController.js";

const router = express.Router();

router.get("/meteors", meteorsController);
router.post("/mars-photo", marsPhotoController);

export default router;
