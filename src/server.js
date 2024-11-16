import express from "express";
import dotenv from "dotenv";
import router from "./delivery/routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
