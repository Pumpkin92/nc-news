import { useState } from "react";
import { deleteComment } from "../api";

export default function DeleteComment({ comment_id, setDeleted }) {
  const [isError, setisError] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    deleteComment(comment_id)
      .then((response) => {
        setDeleted(true);
      })
      .catch((error) => {
        setisError(true);
      });
  };

  if (isError) {
    return <h2>{"Oops something went wrong, please try again later"}</h2>;
  }

  return (
    <button type="submit" onClick={handleClick} disabled={isClicked}>
      Delete Comment
    </button>
  );
}