import { useState } from "react";
import { patchArticleVote } from "../api";

export default function ArticleVotes({ articleVote, articleId }) {
  const [voteChange, setVoteChange] = useState(0);

  const handleVote = (vote) => {
    patchArticleVote(articleId, vote);
    setVoteChange((currVoteChange) => currVoteChange + vote);
  };
  return (
    <section>
      <p>Votes: {articleVote + voteChange}</p>
      <button disabled={voteChange === 1} onClick={() => handleVote(1)}>
        ❤️
      </button>
      <button disabled={voteChange === -1} onClick={() => handleVote(-1)}>
        💔
      </button>
    </section>
  );
}
