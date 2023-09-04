import { useQuery } from 'react-query';
import axios from 'axios';

const useStocksQuery = () => {
  return useQuery('stocks', async () => {
    const options = {
      method: 'GET',
      url: `https://twelve-data1.p.rapidapi.com/stocks`,
      params: {
        exchange: 'NASDAQ',
        format: 'json',
      },
      headers: {
        'X-RapidAPI-Key': '7d6bd010d0mshb0f5a5602c766b4p18b9afjsn7939afbbcb14',
        'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    return response.data.data;
  });
};

export default useStocksQuery;