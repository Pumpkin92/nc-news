import { useEffect, useState } from "react";
import { getAllArticles, getArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";
import ArticleStyle from "./ArticleStyle";
import Loading from "./Loading";
import Topics from "./Topics";
import { useSearchParams } from "react-router-dom";
import SortArticles from "./SortArticles";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const [orderQuery, setOrderQuery] = useState("DESC");
  const [sortBy, setSortBy] = useState("created_at");
  const [orderQueryBtn, setOrderQueryBtn] = useState("Descending ↓");
  const queryTopic = searchParams.get("topic");

  useEffect(() => {
    if (queryTopic) {
      setTopic(queryTopic);
    }
  }, []);

  useEffect(() => {
    if (topic !== "all") {
      getArticlesByTopic(topic, sortBy, orderQuery).then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
        setSearchParams({ topic: topic });
      });
    } else {
      getAllArticles(sortBy, orderQuery).then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
    }
  }, [topic, sortBy, orderQuery]);

  return isLoading ? (
    <Loading />
  ) : (
    <section>
      <Topics setTopic={setTopic} queryTopic={queryTopic} />
      <SortArticles
        setOrderQuery={setOrderQuery}
        orderQuery={orderQuery}
        setSortBy={setSortBy}
        sortBy={sortBy}
        orderQueryBtn={orderQueryBtn}
        setOrderQueryBtn={setOrderQueryBtn}
      />
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
