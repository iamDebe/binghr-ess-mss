
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
        console.log(error)
        
      }
      
    };

    return fetchData();

};
 
export default axiosFetch;
