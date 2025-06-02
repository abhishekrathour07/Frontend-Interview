import React, { useEffect, useState } from 'react'

const useFetch = (url: string) => {
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchdata = async () => {
        try {
            setLoading(true)
            const response = await fetch(url);
            const data = await response.json();
            setData(data?.recipes);

        } catch (err: any) {
            setError("Error while fetching the data")
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchdata()
    }, [])

    return { error, data, loading }
}


export default useFetch
