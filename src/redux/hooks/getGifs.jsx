import { useEffect, useState } from "react"
import {gifs_search} from '../actions/gifs_search'


export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });    

    useEffect( ()=>{
        gifs_search( category )
            .then( imgs =>{
                setState({
                    data: imgs,
                    loading:false
                })
                
            });
    }, [ category ])

    return state;
}