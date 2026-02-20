import { useEffect, useState } from 'react'
import axios from 'axios';

const useCallApi = (api) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/${api}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
}, [api]);
  return data
}

export default useCallApi


// We write return data because a custom hook must return something so that the component using it can access the fetched data.

// Inside the hook

// 1️⃣ useState([]) → creates data
// 2️⃣ useEffect() → fetches API
// 3️⃣ setData(res.data) → updates state
// 4️⃣ return data → exposes state to component