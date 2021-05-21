import React from 'react'
import axios from 'axios'
import {useEffect} from 'react'

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

//
// ─── FETCHING THE DATA ──────────────────────────────────────────────────────────────────────
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
