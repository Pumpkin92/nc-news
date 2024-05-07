import { useEffect, useState } from "react";
import { allArticles } from "../api";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    allArticles.then((articles) => {
      setArticles(articles.data.articles);
    });
  });

  return (
    <section>
      <div className="flex-container">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    </section>
  );
}
