import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="flex-col">
      <li>
        <Link to={`/articles/${article.article_id}`}>
          <h2>{article.title}</h2>
        </Link>
        <p className="article-list-topic">{article.topic}</p>
        <p className="article-list-author">By {article.author}</p>
        <Link to={`/articles/${article.article_id}`}>
          <img src={article.article_img_url} />
        </Link>
        <div className="comm-vote-container">
          <p>Comments: {article.comment_count}</p>
          <p>Votes: {article.votes}</p>
        </div>
      </li>
    </div>
  );
}
