import React from 'react'
import { useParams } from 'react-router-dom'

export default function contact() {
   const params = useParams()
   console.log(params)
    return (
        <h1>Contact us</h1>
    )
}
