import mongoose from "mongoose";

const commentScheme = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    attendance: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Comment = mongoose.model("Comment", commentScheme);
