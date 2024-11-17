import express from "express";
import meteorsController from "../controllers/meteorsController.js";
import marsPhotoController from "../controllers/marsPhotoController.js";
import validateRequest from "../validation/validateRequest.js";
import userSchema from "../validation/schemas/userSchema.js";

const router = express.Router();

router.get("/meteors", meteorsController);
router.post("/mars-photo", validateRequest(userSchema), marsPhotoController);

export default router;
