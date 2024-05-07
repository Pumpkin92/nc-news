export default function ArticleCard({ article }) {
  return (
    <div className="flex-col">
      <li>
        <h2>{article.title}</h2>
        <p>{article.topic}</p>
        <p>By {article.author}</p>
        <img src={article.article_img_url} />
        <p>Comments: {article.comment_count}</p>
      </li>
    </div>
  );
}
