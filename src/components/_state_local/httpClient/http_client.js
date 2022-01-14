import axios from "axios";

const fetchPlaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000
});

export default fetchPlaceholder;
