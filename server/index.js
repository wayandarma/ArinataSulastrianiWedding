import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import commentRoute from "./router/commentRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

// Middleware for parsing request body
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use("/api", commentRoute);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("The server is running correctly");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
