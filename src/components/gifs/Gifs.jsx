import React from 'react'
import {useEffect , useState} from 'react'
import axios from 'axios'

import "./_gifs.scss";

const Gifs = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData = async () => {
            try {
            const results =await axios("https://api.giphy.com/v1/gifs/trending",{
            params:{
                api_key:"Q3O2EkqIyiDtKXq7VkaPtpX1ny6HvBDj"
            }
            });

            console.log(results);
            setData(results.data.data); 
        }
        catch (err) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
          }
    
          setIsLoading(false);
        };

        fetchData();
    },[]);

    const renderGifs = () => {
        return data.map(el => {
            return (
                <div key={el.id} className="gifs__top">
                <img src={el.images.fixed_height.url} alt = ''/>
            </div>
            )
        })
    }
    return (
        <div className="gifs">
           {renderGifs()} 
        </div>
    );
}

export default Gifs
