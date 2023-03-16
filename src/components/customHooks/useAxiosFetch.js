import React, {useEffect, useState} from "react";
import axios from "axios";


const useAxiosFetch = (url, options={}) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {

       
        const fetchData = async () => {
          setIsLoading(true);
          try {
            const res = await axios.get(url, options)
            setData(res.data);
            setError(null);
          } catch (error) {
            setError(error);
            setData(null)
          }

          setIsLoading(false);
          
        };
    
        fetchData();
      
      }, []);

  return  {data, error, isLoading}   
};
 
export default useAxiosFetch;