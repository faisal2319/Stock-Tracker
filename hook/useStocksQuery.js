import { useQuery } from "react-query";
import axios from "axios";
import { API_KEY } from "@env";
const useStocksQuery = () => {
  return useQuery("stocks", async () => {
    const options = {
      method: "GET",
      url: "https://twelve-data1.p.rapidapi.com/stocks",
      params: {
        exchange: "NASDAQ",
        format: "json",
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data.data.slice(4550);
  });
};

export default useStocksQuery;
