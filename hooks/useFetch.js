import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query, token, root="agent/") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `http://192.168.100.168:8000/api/v1/${root}${endpoint}`,
    headers: {
      "X-RapidAPI-Key": '',
      "X-RapidAPI-Host": "192.168.100.168:8000",
      "Authorization": `Bearer ${token}`
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      console.log(response.data)
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;