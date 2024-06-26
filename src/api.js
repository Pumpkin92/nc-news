import axios from "axios";

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

const postComment = (comment, user, article_id) => {
  const newComment = {
    body: comment,
    author: user,
  };
  return axios
    .post(
      `https://nc-news-project-q2e5.onrender.com/api/articles/${article_id}/comments`,
      newComment
    )
    .then((response) => {
      if (response.status !== 201) {
        return Promise.reject({
          status: response.status,
          msg: response.statusText,
        });
      }
      return response;
    });
};

const deleteComment = (comment_id) => {
  return axios
    .delete(
      `https://nc-news-project-q2e5.onrender.com/api/comments/${comment_id}`
    )
    .then((response) => {
      if (response.status !== 204) {
        return Promise.reject({
          status: response.status,
          msg: response.statusText,
        });
      }
      return response;
    });
};

const getTopics = () => {
  return axios
    .get("https://nc-news-project-q2e5.onrender.com/api/topics")
    .then((response) => {
      return response;
    });
};

const getArticlesByTopic = (topic, sortBy, orderQuery) => {
  return axios
    .get(`https://nc-news-project-q2e5.onrender.com/api/articles`, {
      params: { limit: 100, topic: topic, sort_by: sortBy, order: orderQuery },
    })
    .then((response) => {
      return response;
    });
};

export {
  getArticleById,
  getCommentsByArticleId,
  patchCommentVote,
  patchArticleVote,
  postComment,
  deleteComment,
  getTopics,
  getArticlesByTopic,
};
