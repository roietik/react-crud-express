import axios from "axios";

window.axios = axios;

const BASE_URL = "http://localhost:3100/api";

const Api = {
  getAll: async function() {
    const response = await axios.get(`${BASE_URL}/todos`);
    const all = response.data;
    return all;
  },
  getOne: async function(id) {
    if (!id) {
      throw new Error("TODO element has to have an id to be displayed");
    }
    const response = await axios.get(`${BASE_URL}/todos/${id}`);
    const single = response.data;
    console.log(single);
    return single.data;
  },
  add: async function(item) {
    console.log("add", item);
    if (!item) {
      throw new Error("Added TODO is required");
    }
    const response = await axios.post(`${BASE_URL}/todos`, item);
    const addedItem = response.data;
    return addedItem;
  },
  replace: async function(indexToUpdate, itemToUpdate) {
    if (!indexToUpdate) {
      throw new Error("Replaced TODO has to have an id to be updated");
    }
    const response = await axios.put(`${BASE_URL}/todos/${indexToUpdate}`, {
      ...itemToUpdate,
      id: indexToUpdate
    });
    const replacedItem = response.data;
    return replacedItem;
  },
  del: async function(itemToRemove) {
    console.log("api del", itemToRemove, itemToRemove.id);
    if (!itemToRemove.id) {
      throw new Error("Removed TODO has to have an id to be updated");
    }
    await axios.delete(`${BASE_URL}/todos/${itemToRemove.id}`);
  }
};

export default Api;
