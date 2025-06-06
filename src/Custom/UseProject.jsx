import axios from 'axios';
import React, { useEffect, useState } from 'react'


const useProject = (endpoint) => {
  const [data, setData] = useState([]);
  const API= import.meta.env.VITE_API_URL
  const getData = async () => {
    try {
      const response = await axios.get(`${API}/${endpoint}`);
      setData(response.data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return {data}
}

export default useProject
