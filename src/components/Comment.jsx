export default function Comment({ comment }) {
  return (
    <section className="comment-box">
      <p>
        <span className="comment-author">{comment.author}</span>: {comment.body}
      </p>
      <p>Votes: {comment.votes}</p>
      <p>{new Date(comment.created_at).toLocaleDateString()}</p>
      <button>❤️</button>
      <button>💔</button>
    </section>
  );
}
