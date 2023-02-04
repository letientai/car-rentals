const axios = require("axios").default;

const url = process.env.REACT_APP_URL_LOCAL;
export const fetchGenre = () => {
  axios
    .get(`${url}genre`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("error", error);
      return error;
    });
};
