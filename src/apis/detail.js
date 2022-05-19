/* eslint-disable no-unused-vars */

export default (axios, baseUrl) => {
  const getData = (endpoint, params = {}, mapper = null) =>
    axios
      .get(`${baseUrl}${endpoint}`, { params })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error.response); // eslint-disable-line
        throw error.response;
      });

  const postData = (endpoint, params = {}, mapper = null) =>
    axios
      .post(`${baseUrl}${endpoint}`, null, { params })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error.response); // eslint-disable-line
        throw error.response;
      });

  const apis = {
    getBooks: (book, params) => getData(`/books/${book}`, params),
    searchTextFromBooks: (params) => postData(`/search`, params),
  };

  return apis;
};
