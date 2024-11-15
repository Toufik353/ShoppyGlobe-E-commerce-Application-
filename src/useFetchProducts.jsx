import React,{useState,useEffect} from "react";

function useFetchProducts(url,isSingleProduct = false) {
    const [data, setData] = useState(isSingleProduct ? null : [])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
       
        async function fetchData() {
            try {
                setLoading(true)
                const response = await fetch(url)
                const data = await response.json()
                setData(isSingleProduct ? data : data.products)
            } catch (err) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchData()


    }, [url])
    
    return {data,loading,error}
}
// 
export default useFetchProducts;  