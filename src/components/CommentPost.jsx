import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../api";
import Error from "./Error";
import ButtonStyle from "./ButtonStyle";

export default function CommentPost({ articleId, setComments }) {
  const [comment, setComment] = useState("");
  const [posted, setPosted] = useState(false);
  const { user } = useContext(UserContext);
  const [isError, setIsError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  const handleSubmit = (event) => {
    setIsClicked(true);
    event.preventDefault();
    if (comment.length < 1) {
      console.log("logged)");
      setIsError(true);
    } else {
      postComment(comment, user, articleId)
        .then((response) => {
          setPosted(true);
          setIsError(false);
        })
        .catch((error) => {
          setIsError(true);
        });
    }
  };

  const handleCommentBtn = (event) => {
    setPosted(false);
    setIsClicked(false);
    setComments((currComments) => {
      return [...currComments, comment];
    });
    setComment("");
  };

  if (user === "") {
    return <h2>Log in to post a comment</h2>;
  }

  if (isError) {
    return (
      <div>
        <Error message="Oops something went wrong, please try again later" />
      </div>
    );
  }

  return posted ? (
    <section>
      <h2>Comment posted</h2>
      <div className="posted-comment">
        <p>
          {user}: "{comment}"
        </p>
      </div>
      <button onClick={handleCommentBtn}>Post another comment? </button>
    </section>
  ) : (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <label>
          <div className="comment-label">Comment:</div>
          <textarea
            className="comment-text-box"
            type="text"
            name="commentBody"
            value={comment}
            onChange={handleChange}
            rows="5"
            cols="35"
          ></textarea>
        </label>
        <ButtonStyle>
          <button type="submit" disabled={isClicked}>
            Submit
          </button>
        </ButtonStyle>
      </form>
    </div>
  );
}
