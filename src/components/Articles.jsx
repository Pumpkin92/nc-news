import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";
import ArticleStyle from "./ArticleStyle";
import Loading from "./Loading";
import Topics from "./Topics";
import { useSearchParams } from "react-router-dom";
import SortArticles from "./SortArticles";
import Error from "./Error";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [orderQuery, setOrderQuery] = useState("DESC");
  const [sortBy, setSortBy] = useState("created_at");
  const [orderQueryBtn, setOrderQueryBtn] = useState("Descending ↓");
  const queryTopic = searchParams.get("topic");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (queryTopic) {
      setTopic(queryTopic);
    }
  }, []);

  useEffect(() => {
    getArticlesByTopic(topic, sortBy, orderQuery)
      .then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
        setSearchParams({ topic: topic });
      })
      .catch((error) => {
        setIsError(true);
      });
  }, [topic, sortBy, orderQuery]);

  return isError ? (
    <Error message="Topic does not exist" />
  ) : isLoading ? (
    <Loading />
  ) : (
    <section>
      <div className="topic-sort-parent">
        <Topics setTopic={setTopic} queryTopic={queryTopic} />
        <SortArticles
          setOrderQuery={setOrderQuery}
          orderQuery={orderQuery}
          setSortBy={setSortBy}
          sortBy={sortBy}
          orderQueryBtn={orderQueryBtn}
          setOrderQueryBtn={setOrderQueryBtn}
        />
      </div>
      <div className="flex-container">
        {articles.map((article) => {
          return (
            <ArticleStyle key={article.article_id}>
              <ArticleCard article={article} />
            </ArticleStyle>
          );
        })}
      </div>
    </section>
  );
}
