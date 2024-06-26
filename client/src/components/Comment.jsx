import { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

export default function Comment() {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        "https://arinata-sulastriani-wedding-rlu2.vercel.app/api/comments"
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <CommentForm fetchComment={fetchComments} />
      <CommentList comments={comments} />
    </>
  );
}
