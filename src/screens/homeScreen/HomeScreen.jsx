import React from 'react'
import axios from 'axios'
import {useEffect} from 'react'
import {Search} from '../gifs/GifSearch'
import {getTrending}from '../gifs/Gifs'
import { useDispatch } from 'react-redux';
import { log_out } from '../../redux/actions/auth.action'
import { BiLeftArrow,BiRightArrow } from "react-icons/bi";

export default function Gif() {
    // STATES
    const [data, setData] = React.useState([]);
    const [title, setTitle] = React.useState('Gif');
    const [loader, setLoader] = React.useState(true);
    const [offset, setOffset] = React.useState(0);
    const [limit] = React.useState(12)
    const [totalCount, setTotalCount] = React.useState(0)
    const [search, setSearch] = React.useState('');
    const [trending, setTrending] = React.useState(false)
    const [trendSearch, setTrendSearch] = React.useState(false)
    const dispatch = useDispatch()
   const logOutHandler = () => {
      dispatch(log_out())
   }

/**********************FETCHING DATA********************************/
const fetchData = async (title)=>{
let URL = `https://api.giphy.com/v1/gifs/search?q=${title}&api_key=Q3O2EkqIyiDtKXq7VkaPtpX1ny6HvBDj&limit=${limit}&offset=${offset}`;
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
    if(trending){
        getTrending(limit, offset, setOffset, setTrending, setData, setLoader, setTotalCount, content, setTrendSearch, title, setTitle)
        }
    // if trending is false fetch new data
    if(!trending){
        fetchData(title)
        }
    },[offset])

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

// Scroll on top function
const onTop = () => {
    let options = { top: 0, left: 0, behavior: 'smooth' };
    window.scrollTo(options);
}

// Handle Next Pagination
const handleNext = ()=>{
    // Set loader true
    setLoader(true);
    // Add one page
    setOffset(offset + limit)
    // Go on top
    onTop()
}
// Handle prev Pagination
const handlePrev = ()=>{
    // Loader true
    setLoader(true);
    // One page
    setOffset(offset - limit) 
    // Go on top
    onTop()
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
                
                <button onClick= {()=> handleDownload(g.images.fixed_height.url)} className="gif-download">

                </button>   
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
    <header>
    <Search search={search} setSearch={setSearch} fetchData={fetchData} setTitle={setTitle}/>
    <button className='gif-btn-trending' onClick={()=> getTrending(limit, offset, setOffset, setTrending, setData, setLoader, setTotalCount, content, setTrendSearch, title, setTitle)}>Get More Trending Gifs</button>
    <button className="logout" onClick={logOutHandler}>LogOut</button>
    </header>
    <br/>
    <div className='gif-wrap'>
      {content()}
    </div>
    
    <div className="pagination">
        {
            totalCount === 0 ?
            ''
            :
            offset < limit ?
            <BiRightArrow  onClick={handleNext}  alt="right" size={26}/>
            :
            offset >= totalCount ?
            <BiLeftArrow className='svg'onClick={handlePrev}  alt="left" size={26}/>
            :
            <>
            <BiLeftArrow className='svg'onClick={handlePrev} alt="left" size={26}/>
            <BiRightArrow className='svg'onClick={handleNext} alt="right" size={26}/>

            </>
        }
        </div>
    </div>
  )
}