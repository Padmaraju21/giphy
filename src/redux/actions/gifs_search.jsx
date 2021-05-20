
export const gifs_search = async ( category )=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&api_key=Q3O2EkqIyiDtKXq7VkaPtpX1ny6HvBDj&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( ({ id, title, images }) => {
        return {
            id: id,
            title: title,
            url: images?.downsized_medium.url,
        }
    })
    return gifs;
}