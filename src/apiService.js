import axios from 'axios';

// Base URL of the backend
const BASE_URL = 'http://localhost:5001/api';

export const fetchData = async (apiName) => {
  try {
    const response = await axios.get(`${BASE_URL}/${apiName}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
