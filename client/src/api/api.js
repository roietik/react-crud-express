import axios from "axios";

window.axios = axios;

const BASE_URL = "http://localhost:3100/api/todos";

const AxiosApi = {
  getAll: async function() {
    const response = await axios.get(`${BASE_URL}/employees`);
    const all = response.data;
    return all.data;
  },
  getOne: async function(id) {
    if (!item) {
      throw new Error("TODO element has to have an id to be displayed");
    }
    const response = await axios.get(`${BASE_URL}/employee/${id}`);
    const single = response.data;
    console.log(single);
    return single.data;
  },
  add: async function(item) {
    if (!item) {
      throw new Error("Added TODO is required");
    }
    const response = await axios.post(`${BASE_URL}/create`, item);
    const addedItem = response.data;
    return addedItem;
  },
  replace: async function(indexToUpdate, itemToUpdate) {
    if (!indexToUpdate) {
      throw new Error("Replaced TODO has to have an id to be updated");
    }
    const response = await axios.put(
      `${BASE_URL}/update/${indexToUpdate + 1}`,
      { ...itemToUpdate, id: indexToUpdate }
    );
    const replacedItem = response.data;
    return replacedItem;
  },
  remove: async function(itemToRemove) {
    if (!itemToRemove.id) {
      throw new Error("Removed TODO has to have an id to be updated");
    }
    await axios.delete(`${BASE_URL}/delete/${itemToRemove.id}`);
  }
};

export default AxiosApi;
