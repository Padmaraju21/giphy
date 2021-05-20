import axios from 'axios'
const request =axios.create({
    baseURL:"https://api.giphy.com/v1/gifs",
    params:{
        key: process.env.REACT_APP_GIFS_API_KEY,
   }
})
 export default request