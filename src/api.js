import axios from "axios";

const getAllArticles = () => {
  return axios
    .get("https://nc-news-project-q2e5.onrender.com/api/articles")
    .then((response) => {
      return response;
    });
};

const getArticleById = (article_id) => {
  return axios
    .get(`https://nc-news-project-q2e5.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response;
    });
};

const getCommentsByArticleId = (article_id) => {
  return axios
    .get(
      `https://nc-news-project-q2e5.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => {
      return response;
    });
};

export { getAllArticles, getArticleById, getCommentsByArticleId };
