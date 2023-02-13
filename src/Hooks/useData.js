import { useState, useEffect } from 'react';


const useData = (url) => {
    const [data, setData] = useState([]);
    // console.log('data',data)

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data)
            // console.log(data)
        })
        .catch(err => console.log(err))
    },[url])
    return data
}

// export data
export default useData;
