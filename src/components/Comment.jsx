import { useState, useContext } from "react";
import CommentVote from "./CommentVote";
import DeleteComment from "./DeleteComment";

import { UserContext } from "../contexts/User";

export default function Comment({ comment }) {
  const [deleted, setDeleted] = useState(false);
  const { user } = useContext(UserContext);

  return deleted ? (
    <h2>Comment Deleted</h2>
  ) : (
    <section className="comment-box">
      <p>
        <span className="comment-author">{comment.author}</span>: {comment.body}
      </p>
      <CommentVote comment={comment} />

      <p>{new Date(comment.created_at).toLocaleDateString()}</p>
      {comment.author === user && (
        <DeleteComment
          comment_id={comment.comment_id}
          setDeleted={setDeleted}
        />
      )}
    </section>
  );
}
