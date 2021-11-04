import axios from "axios";

const AxiosInstance = () => {
  return axios.create({
    baseURL: 'https://jajanan-kedai-atok-server.herokuapp.com/',
  });
};

export default AxiosInstance;
