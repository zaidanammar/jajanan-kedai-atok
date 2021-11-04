import axios from "axios";

const AxiosInstance = () => {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
  });
};

export default AxiosInstance;
