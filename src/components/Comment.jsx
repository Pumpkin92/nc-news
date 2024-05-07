import { useState } from "react";
import CommentVote from "./CommentVote";

export default function Comment({ comment }) {
  return (
    <section className="comment-box">
      <p>
        <span className="comment-author">{comment.author}</span>: {comment.body}
      </p>
      <CommentVote comment={comment} />
      <p>{new Date(comment.created_at).toLocaleDateString()}</p>
    </section>
  );
}
