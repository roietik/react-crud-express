import axios from "axios";

window.axios = axios;

const BASE_URL = "http://localhost:3100/api/todos";

const Api = {
  getAll: async function() {
    const response = await axios.get(`${BASE_URL}`);
    const all = response.data;
    return all;
  },
  getOne: async function(id) {
    const response = await axios.get(`${BASE_URL}/${id}`);
    const one = response.data;
    return one.data;
  },
  add: async function(item) {
    const response = await axios.post(`${BASE_URL}`, item);
    const added = response.data;
    return added;
  },
  replace: async function(indexToUpdate, itemToUpdate) {
    const response = await axios.put(`${BASE_URL}/${indexToUpdate}`, {
      ...itemToUpdate,
      id: indexToUpdate
    });
    const replaced = response.data;
    return replaced;
  },
  del: async function(indexToRemove) {
    await axios.delete(`${BASE_URL}/${indexToRemove}`);
  }
};

export default Api;
