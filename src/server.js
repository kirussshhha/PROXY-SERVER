import express from "express";
import dotenv from "dotenv";
import router from "./delivery/routes/routes.js";
import "../instrument.js";
import * as Sentry from "@sentry/node"

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

app.use("/", router);

Sentry.setupExpressErrorHandler(app);

app.use(function onError(err, req, res, next) {
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
