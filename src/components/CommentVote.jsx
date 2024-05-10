import { useState } from "react";
import { patchCommentVote } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function CommentVote(props) {
  const { comment } = props;
  const votes = comment.votes;
  const [voteChange, setVoteChange] = useState(0);

  const handleVote = (vote) => {
    patchCommentVote(comment.comment_id, vote);
    setVoteChange((currVoteChange) => currVoteChange + vote);
  };

  return (
    <section>
      <div className="vote-btn-div">
        <button
          className="vote-btn"
          disabled={voteChange === 1}
          onClick={() => handleVote(1)}
        >
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#ea1a2f" }}
            className="fa-xl"
          />
        </button>
        <button
          className="vote-btn"
          disabled={voteChange === -1}
          onClick={() => handleVote(-1)}
        >
          <FontAwesomeIcon
            icon={faHeartCrack}
            style={{ color: "#ea1a2f" }}
            className="fa-xl"
          />
        </button>
        <p>Votes: {votes}</p>
      </div>
    </section>
  );
}
