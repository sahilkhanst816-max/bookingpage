import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const photo = () => {

    async function getData() {
        const data1 = await axios.get('http://localhost:3000/photo')
        setdata(data1)
    }
    useEffect(() => {
        getData()
    }, [])
    const [data, setdata] = useState([])
    return (
        <>
uhfwnodjslnjkd

        </>
    )
}

export default photo