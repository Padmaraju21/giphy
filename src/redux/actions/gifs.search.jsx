import {useState} from 'react'
import axios from 'axios'

export const handleSearchChange = event => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data,setData]=useState([])
    setSearch(event.target.value);
  };

  export const handleSubmit = async event => {
    event.preventDefault();
    setIsError(false);
    setIsLoading(true);

    try {
      const results = await axios("https://4api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "Q3O2EkqIyiDtKXq7VkaPtpX1ny6HvBDj",
          q: search,
          limit: 100
        }
      });
      setData(results.data.data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }

    setIsLoading(false);
  };