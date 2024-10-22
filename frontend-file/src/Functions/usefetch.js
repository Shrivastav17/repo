import React, { useEffect, useState } from 'react'
import url from "../env"

 function useFetch(path){
    var apipath = url.nodeapipath + path;
    const [api,setapi] = useState([]);

    useEffect(() => {
        // console.log(url);

        fetch(apipath)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setapi(json)
            })
    }, [])
    return api;
 }

 export default useFetch;