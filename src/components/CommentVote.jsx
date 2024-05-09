import { useState } from "react";
import { patchCommentVote } from "../api";

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
      <p>Votes: {votes}</p>
      <button disabled={voteChange === 1} onClick={() => handleVote(1)}>
        ❤️
      </button>
      <button disabled={voteChange === -1} onClick={() => handleVote(-1)}>
        💔
      </button>
    </section>
  );
}
