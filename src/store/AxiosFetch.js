
import axios from "axios";


const API_BASE_URL = ' http://localhost:3000';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export const fetchData = async (url, method = 'GET', data = null) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}: ${error}`);
    throw new Error(error);
  }
};


// const axiosFetch = axios.create({
//   baseURL: ' http://localhost:3000',
//   headers: {

//   },
// });

// export default axiosFetch;