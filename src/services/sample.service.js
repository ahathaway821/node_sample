const service = {};
const axios = require('axios');

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    timeout:1000
});

// ==================================================

service.list = () => client.get('/posts').then(response => response.data);

service.read = recordId => client.get(`/posts/${recordId}`).then(response => response.data);

service.create = model => Promise.resolve({});

service.update = (recordId, model) => Promise.resolve({});

service.delete = recordId => Promise.resolve({});

// ==================================================

module.exports = service;
