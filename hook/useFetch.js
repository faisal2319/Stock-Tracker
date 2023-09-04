import {useState, useEffect} from 'react';
import axios from "axios";


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    const options = {
        method: 'GET',
        url: `https://twelve-data1.p.rapidapi.com/${endpoint}`,
        params: {
          exchange: 'NASDAQ',
          format: 'json'
        },
        headers: {
          'X-RapidAPI-Key': '7d6bd010d0mshb0f5a5602c766b4p18b9afjsn7939afbbcb14',
          'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        },
      };


      const fetchData = async () =>{
        setIsLoading(true);
        try{
            const response = await axios.request
            (options);

            setData(response.data.data)
            setIsLoading(false)
        } catch(error){
            setError(error)
            alert('There is an Error')
        }finally{
            setIsLoading(false);
        }
      }


      useEffect(() => {
        fetchData();
      }, [])


    const refetch = () =>{
        setIsLoading(true);
        fetchData();
    }


    return {data, isLoading, error, refetch};

}

export default useFetch
