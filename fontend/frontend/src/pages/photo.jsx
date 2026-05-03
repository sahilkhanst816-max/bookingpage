import { useEffect } from 'react'
import { useState } from 'react'
import { api } from '../api'

const photo = () => {

    async function getData() {
        const data1 = await api.get('/notes')
        setdata(data1.data.data)
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
