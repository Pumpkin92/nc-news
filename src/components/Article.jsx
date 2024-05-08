import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import ArticleStyle from "./ArticleStyle";
import CommentList from "./CommentList";
import Loading from "./Loading";
import ArticleVotes from "./ArticleVotes";
import CommentPost from "./CommentPost";

export default function Article() {
  const [article, setArticle] = useState();
  const { article_id } = useParams({});
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then(({ data }) => {
      setArticle(data.article);
      setIsLoading(false);
    });
  }, [setArticle]);

  return isloading ? (
    <Loading />
  ) : (
    <section>
      <ArticleStyle>
        <section className="articleCard">
          <h2>{article.title}</h2>
          <p>{article.topic}</p>
          <p>By {article.author}</p>
          <img src={article.article_img_url} />
          <p>{article.body}</p>
          <p>{new Date(article.created_at).toLocaleDateString()}</p>
          <p>Comments: {article.comment_count}</p>
          <ArticleVotes articleVote={article.votes} articleId={article_id} />
        </section>
      </ArticleStyle>
      <ArticleStyle>{<CommentPost articleId={article_id} />}</ArticleStyle>
      <ArticleStyle>
        <CommentList />
      </ArticleStyle>
    </section>
  );
}
