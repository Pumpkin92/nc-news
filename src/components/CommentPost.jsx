import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../api";

export default function CommentPost({ articleId }) {
  const [comment, setComment] = useState("");
  const [posted, setPosted] = useState(false);
  const { user } = useContext(UserContext);
  const [isError, setisError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  const handleSubmit = (event) => {
    setIsClicked(true);
    event.preventDefault();
    postComment(comment, user, articleId)
      .then((response) => {
        setPosted(true);
        setisError(false);
      })
      .catch((error) => {
        setisError(true);
      });
  };

  const handleCommentBtn = (event) => {
    setPosted(false);
  };

  if (user === "") {
    return <h2>Log in to post a comment</h2>;
  }

  if (isError) {
    return <h2>{"Oops something went wrong, please try again later"}</h2>;
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
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <input
          className="comment-text-box"
          type="text"
          name="commentBody"
          value={comment}
          required
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit" disabled={isClicked}>
        Submit
      </button>
    </form>
  );
}
