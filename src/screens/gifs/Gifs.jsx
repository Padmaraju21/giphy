import axios from 'axios'

export const getTrending = async(limit, offset, setOffset, setTrending, setData, setLoader, setTotalCount, content, setTrendSearch, title, setTitle) => {
    try {
        let URL = `https://api.giphy.com/v1/gifs/trending?&api_key=Q3O2EkqIyiDtKXq7VkaPtpX1ny6HvBDj&limit=${limit}&offset=${offset}`;
        let getGif = await axios(URL);
        let getRes = await getGif;
        // Set State console log
        if (getRes.status === 200) {
            // console.log(fetchRes)
            // Set Data
            setData(getRes.data.data)
                // Set Total Count
            setTotalCount(getRes.data.pagination.total_count)
                // Set loader false
            setLoader(false)
                // Set random
            setTrending(true)
                // Set title
            if (title !== 'Trending') {
                setTitle('Trending')
                if (offset > 0) {
                    setOffset(0)
                }
            }
            // Call new content
            content()
                // Set trend search false
            setTrendSearch(false)
        }
    } catch (error) {
        if (error) throw error;
    }   
}