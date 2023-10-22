import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [Data, setData] = useState(null);
    const [IsPending, setIsPending] = useState(true);
    const [error , setError] = useState(null);


    
    useEffect(() => {
        setTimeout(() => 
       { fetch(url)
        .then(res =>{
            
            if(!res.ok) {
             throw new Error("something went wrong")
            }

            return res.json()
        }

        )
        .then(data => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch((err) => {
            setError(err.message)
            setIsPending(false)
        });} , 100)
        
    }, [url]);

    return {Data,setData, IsPending, error}
}

export default useFetch;