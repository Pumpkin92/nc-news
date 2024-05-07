import { useState } from "react";
import "./App.css";
import "./css/ArticleCard.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Topic from "./components/Topics";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/topics" element={<Topic />} />
      </Routes>
    </main>
  );
}

export default App;
