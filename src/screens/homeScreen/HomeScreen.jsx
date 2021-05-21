import React from 'react'
import axios from 'axios'
import {useEffect} from 'react'

import Download from './Download.svg'

export default function Gif() {
    // STATES
    const [data, setData] = React.useState([]);
    const [title, setTitle] = React.useState('Gif');
    const [loader, setLoader] = React.useState(true);
    const [offset, setOffset] = React.useState(0);
    const [limit, setLimit] = React.useState(8)
    const [totalCount, setTotalCount] = React.useState(0)
    const [search, setSearch] = React.useState('');
    const [trending, setTrending] = React.useState(false)
    const [trendSearch, setTrendSearch] = React.useState(false)
    const [tSearch, setTsearch] = React.useState([])

/**********************FETCHING DATA********************************/
const fetchData = async (title)=>{
let URL = `https://api.giphy.com/v1/gifs/search?q=${title}&api_key=${process.env.REACT_APP_GIFS_API_KEY}&limit=${limit}&offset=${offset}`;
// Try and catch
try{
    let fetchGif = await axios(URL);
    let fetchRes = await fetchGif;
    // Set State console log
    if(fetchRes.status === 200){
    // console.log(fetchRes.data)
    // Setting the  Data
    setData(fetchRes.data.data)
    // Setting the total Total Count
    setTotalCount(fetchRes.data.pagination.total_count)
    // Setting loader false
    setLoader(false)
     // Callong new content
     content()
     // Setting fetch random false
     if(trending){
     setTrending(false)
    // Resetting offset
    setOffset(0)
     }
     // Set trend searching
     setTrendSearch(false)
    
    }
}
catch(error){
    if(error) throw error
}

}
useEffect(()=>{
    // if trending is false fwtch new data
    if(!trending){
        fetchData(title)
        }
    },[offset])
}
/***************************HANDLING DOWNLOAD***************************** */
const handleDownload = (url)=>{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        let urlCreator = window.URL || window.webkitURL;
        let imageUrl = urlCreator.createObjectURL(this.response);
        let tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = title.charAt(0).toUpperCase() + title.slice(1);
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}
/************************RENDERING CONTENT*************************/
const content = () => {
    switch(true) {
    // If loader is true show loader spinner
      case loader:
        return <div>Loading...</div>
    // If data array more than zero loop through
      case data.length > 0:
        return  data.map(g=> {
            return (
                <div className='gif-card' key={g.id}>
                <details>
                <summary>Show</summary>
                    <h4>{g.title !== undefined ? (g.title.charAt(0).toUpperCase() + g.title.slice(1)) : ''}</h4>
                <button onClick= {()=> handleDownload(g.images.fixed_height.url)} className="gif-download">
                    <img className='svg' src={Download} alt="download"/>
                </button>
                   
                </details>
                <img onClick= {()=> handleDownload(g.images.fixed_height.url)} className='image' src={g.images.fixed_width.url} alt="gif"/>
                </div>
            )
        })

    // Otherwise return default
      default:
        return data
    }
  }

  return (
      <div>
          Gify Exploer
      </div>
  )
