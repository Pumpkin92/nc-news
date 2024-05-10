import { useState } from "react";
import { patchArticleVote } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCrack, faHeart } from "@fortawesome/free-solid-svg-icons";
export default function ArticleVotes({ articleVote, articleId }) {
  const [voteChange, setVoteChange] = useState(0);

  const handleVote = (vote) => {
    patchArticleVote(articleId, vote);
    setVoteChange((currVoteChange) => currVoteChange + vote);
  };
  return (
    <section className="votes-section">
      <p className="votes">Votes: {articleVote + voteChange}</p>
      <span className="vote-btn-div">
        <button
          className="vote-btn"
          disabled={voteChange === 1}
          onClick={() => handleVote(1)}
        >
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "#ea1a2f" }}
            className="fa-3x"
          />
        </button>
      </span>
      <span className="vote-btn-div">
        <button
          className="vote-btn"
          disabled={voteChange === -1}
          onClick={() => handleVote(-1)}
        >
          <FontAwesomeIcon
            icon={faHeartCrack}
            style={{ color: "#ea1a2f" }}
            className="fa-3x"
          />
        </button>
      </span>
    </section>
  );
}
