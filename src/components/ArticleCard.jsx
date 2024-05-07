import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="flex-col">
      <li>
        <Link to={`/articles/${article.article_id}`}>
          <h2>{article.title}</h2>
        </Link>
        <p>{article.topic}</p>
        <p>By {article.author}</p>
        <Link to={`/articles/${article.article_id}`}>
          <img src={article.article_img_url} />
        </Link>
        <p>{article.body}</p>
        <p>Comments: {article.comment_count}</p>
      </li>
    </div>
  );
}
