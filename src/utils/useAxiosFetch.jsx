import React, {useEffect, useState} from "react";
import axios from "axios";





const axiosFetch = async (url, method,  headers={}, options=null) => {
    const fetchData = async () => {
      
      try {
        return  await axios({
          "method": method,
          "url": url,
          "data": options,
          "headers": headers
        })
        .then(response =>  {return response.data} )
      } catch (error) {
        return error;
        
      }
      
    };

    return fetchData();

  // return  {data, error, isLoading}   
};
 
export default axiosFetch;