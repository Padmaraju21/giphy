import axios from 'axios'

export const fetchtrendSearch = async(setTrendSearch, trendSearch, setTsearch) => {
    try {
        let URL = `https://api.giphy.com/v1/trending/searches?&api_key=Q3O2EkqIyiDtKXq7VkaPtpX1ny6HvBDj`;
        let getGif = await axios(URL);
        let getRes = await getGif;
        // Set State console log
        if (getRes.status === 200) {
            // console.log(fetchRes)
            // Set trending true or false
            setTrendSearch(!trendSearch)
                // Set trending search
            setTsearch(getRes.data.data);
        }
    } catch (error) {
        if (error) throw error;
    }
}