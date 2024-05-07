import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { articleById } from "../api";
import ArticleStyle from "./ArticleStyle";

export default function Article() {
  const [article, setArticle] = useState();
  const { article_id } = useParams({});
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    articleById(article_id).then(({ data }) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [setArticle]);

  return isloading ? (
    <h2>Loading...</h2>
  ) : (
    <ArticleStyle>
      <section className="articleCard">
        <h2>{article.title}</h2>
        <p>{article.topic}</p>
        <p>By {article.author}</p>
        <img src={article.article_img_url} />
        <p>{article.body}</p>
        <p>{new Date(article.created_at).toLocaleDateString()}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
      </section>
    </ArticleStyle>
  );
}
