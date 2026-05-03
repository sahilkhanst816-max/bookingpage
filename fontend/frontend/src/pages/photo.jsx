import { useEffect } from 'react'
import { useState } from 'react'
import { api, isApiConfigured } from '../api'

const photo = () => {

    async function getData() {
        if (!isApiConfigured) return
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
