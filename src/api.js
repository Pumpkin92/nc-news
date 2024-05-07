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

const patchCommentVote = (comment_id, vote) => {
  const votes = { inc_votes: vote };
  return axios
    .patch(
      `https://nc-news-project-q2e5.onrender.com/api/comments/${comment_id}`,
      votes
    )
    .then((response) => {
      return response;
    });
};

const patchArticleVote = (article_id, vote) => {
  const votes = { inc_votes: vote };
  return axios
    .patch(
      `https://nc-news-project-q2e5.onrender.com/api/articles/${article_id}`,
      votes
    )
    .then((response) => {
      if (response.status !== 200) {
        return Promise.reject({
          status: response.status,
          msg: response.statusText,
        });
      }
      return response;
    });
};

export {
  getAllArticles,
  getArticleById,
  getCommentsByArticleId,
  patchCommentVote,
  patchArticleVote,
};
