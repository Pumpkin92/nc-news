import axios from "axios";

const allArticles = () => {
  return axios
    .get("https://nc-news-project-q2e5.onrender.com/api/articles")
    .then((response) => {
      return response;
    });
};

const articleById = (article_id) => {
  return axios
    .get(`https://nc-news-project-q2e5.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response;
    });
};

export { allArticles, articleById };
