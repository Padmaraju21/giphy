import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
export function Search({search, setSearch, fetchData, setTitle}) {
// Handle Submit
const handleSubmit = (e)=>{
    // Prevent default
    e.preventDefault();
    // Set Title
    setTitle(search);
    // Fetch
    fetchData(search);
    // Reset form search value
    setSearch('');
}

// RETURN    
    return (
        <div>
            <form  className='gif-search' onSubmit={handleSubmit}><input type="text"  type="text" onChange={ e => setSearch(e.target.value)}/><button type="submit">
            <AiOutlineSearch size={22}/></button>
            </form>
        </div>
    )
}
