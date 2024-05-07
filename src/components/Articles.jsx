import { useEffect, useState } from "react";
import { allArticles } from "../api";
import ArticleCard from "./ArticleCard";
import ArticleStyle from "./ArticleStyle";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    allArticles().then(({ data }) => {
      setArticles(data.articles);
    });
  }, []);

  return (
    <section>
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
