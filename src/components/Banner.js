import React, { useEffect } from 'react'
import axios from '../api/axios'
import request from '../api/request'

const Banner = () => {

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await axios.get(request.fetchNowPlaying)
  }

  return (
    <div>Banner</div>
  )
}

export default Banner