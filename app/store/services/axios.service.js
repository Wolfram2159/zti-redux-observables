import axios  from 'axios';

export default (
    url,
  method,
  headers,
  dataOrParams,
  ) => {
  return axios
    .request({
      url: `https://jsonplaceholder.typicode.com/${ url }`,
      method: method,
      headers: headers,
      data: dataOrParams
    })
    .then(response => {
      console.log("SUCCESS", response);
      return Promise.resolve(response);
    })
    .catch(error => {
      console.log("ERROR", error.response);
      if (error.response) return Promise.reject(error.response);
      return Promise.reject(error);
    })
};
