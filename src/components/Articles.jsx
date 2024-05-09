import { useEffect, useState } from "react";
import { getAllArticles, getArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";
import ArticleStyle from "./ArticleStyle";
import Loading from "./Loading";
import Topics from "./Topics";
import { useSearchParams } from "react-router-dom";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topic, setTopic] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();

  const queryTopic = searchParams.get("topic");

  useEffect(() => {
    if (queryTopic) {
      setTopic(queryTopic);
    }
    if (topic !== "all") {
      getArticlesByTopic(topic).then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
        setSearchParams({ topic: topic });
      });
    } else {
      getAllArticles().then(({ data }) => {
        setArticles(data.articles);
        setIsLoading(false);
      });
    }
  }, [topic]);

  return isLoading ? (
    <Loading />
  ) : (
    <section>
      <Topics setTopic={setTopic} queryTopic={queryTopic} />
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
