import express, { request } from "express";
import { Comment } from "../models/commentsModel.js";

const router = express.Router();

router.post("/comments", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.message ||
      !request.body.attendance
    ) {
      return response.status(400).send({
        message: "Send all required fields: name, message, attedance",
      });
    }
    const existingComment = await Comment.findOne({ name: request.body.name });
    if (existingComment) {
      return response.status(400).send({
        message: "A comment with this name already exists.",
      });
    }
    const newComment = {
      name: request.body.name,
      message: request.body.message,
      attendance: request.body.attendance,
    };
    console.log(newComment);
    const comment = await Comment.create(newComment);

    return response.status(201).send(comment);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/comments", async (request, response) => {
  try {
    const comments = await Comment.find({});

    return response.status(200).json({
      count: comments.length,
      data: comments,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
router.delete("/comments/deleteAll", async (request, response) => {
  try {
    // Perform authentication check here
    // For example: if (!request.user || !request.user.isAdmin) { ... }

    await Comment.deleteMany({});
    return response
      .status(200)
      .send({ message: "All comments deleted successfully." });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
export default router;
