import React, {useEffect, useState} from "react";
import axios from "axios";


const axiosFetch = (url, options, headers) => {
  console.log(headers)

    const fetchData = async () => {
      
      try {
        const res = await axios.post(url, options, {headers:headers})
        .then(response=>{return response.json()} );
      } catch (error) {
        console.log(error);
        return error;
        
      }
      
    };

    fetchData();

  // return  {data, error, isLoading}   
};
 
export default axiosFetch;