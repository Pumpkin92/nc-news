import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import ArticleStyle from "./ArticleStyle";
import CommentList from "./CommentList";
import Loading from "./Loading";
import ArticleVotes from "./ArticleVotes";
import CommentPost from "./CommentPost";
import Error from "./Error";

export default function Article() {
  const [article, setArticle] = useState();
  const { article_id } = useParams({});
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then(({ data }) => {
        setArticle(data.article);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [setArticle]);

  return isError ? (
    <Error message="Article not found" />
  ) : isloading ? (
    <Loading />
  ) : (
    <section>
      <div className="articleStyle-container">
        <ArticleStyle>
          <section className="articleCard">
            <div className="article-header">
              <h2>{article.title}</h2>

              <p className="article-topic">{article.topic}</p>
              <p className="article-author">By {article.author}</p>
            </div>
            <img src={article.article_img_url} />
            <p className="article-body">{article.body}</p>
            <div className="date-comment-container">
              <p>Comments: {article.comment_count}</p>
              <p>{new Date(article.created_at).toLocaleDateString()}</p>
            </div>
            <ArticleVotes articleVote={article.votes} articleId={article_id} />
          </section>
        </ArticleStyle>
        <ArticleStyle>{<CommentPost articleId={article_id} />}</ArticleStyle>
        <ArticleStyle>
          <CommentList />
        </ArticleStyle>
      </div>
    </section>
  );
}
