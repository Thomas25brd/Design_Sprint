import axios from "axios";

const apiRequest = (method, url, request) => {
    const headers = {
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvb3RAcm9vdC5jb20iLCJpYXQiOjE2MjQwMTA1OTB9.jOMauP6YNJ7SJ8W9FFF4q6O3flyvAYuvDR2pu5L1MXk"
    };

    axios.post("http://localhost:3000/register").then(reponse => reponse.data)
};

// function to execute the http get request
const get = (url, request) => apiRequest("get",url,request);

// function to execute the http delete request
const deleteRequest = (url, request) =>  apiRequest("delete", url, request);

// function to execute the http post request
const post = (url, request) => apiRequest("post", url, request);

// function to execute the http put request
const put = (url, request) => apiRequest("put", url, request);

// expose your method to other services or actions
const API ={
    get,
    delete: deleteRequest,
    post,
    put
};
export default API;