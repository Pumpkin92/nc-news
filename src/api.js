import axios from "axios";

const instance = axios.create({
  baseURL: "https://nc-news-project-q2e5.onrender.com/api",
});

const allArticles = instance.get("/articles");

export { allArticles };
