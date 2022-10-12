const axios = require("axios").default;

export const fetchGenre = () =>{
    axios
    .get(`http://api-rental-carl.herokuapp.com/genre`)
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      console.log("error", error);
      return error
    });
}
