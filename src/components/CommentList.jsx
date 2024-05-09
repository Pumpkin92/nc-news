import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentStyle from "./CommentStyle";

export default function CommentList() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ data }) => {
      setComments(data.comments);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <section>
      {comments.map((comment) => {
        return (
          <CommentStyle key={comment.comment_id}>
            <Comment comment={comment} setComments={setComments} />
          </CommentStyle>
        );
      })}
    </section>
  );
}
