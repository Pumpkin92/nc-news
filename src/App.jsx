import { useState } from "react";
import "./App.css";
import "./css/ArticleCard.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Topic from "./components/Topics";
import Header from "./components/Header";
import { UserProvider } from "./contexts/User";
import Error from "./components/Error";

function App() {
  return (
    <main>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/topics" element={<Topic />} />

          <Route
            path="/*"
            element={
              <Error message="This path does not exist, please try another page" />
            }
          />
        </Routes>
      </UserProvider>
    </main>
  );
}

export default App;
