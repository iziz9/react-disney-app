import React, { useEffect, useState } from 'react'
import axios from '../api/axios'

const Row = ({ title, id, fetchUrl }) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovieData();
  }, [])

  const fetchMovieData = async () => {
    const response = await axios.get(fetchUrl)
    console.log(response)
    setMovies(response.data.results)
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div
          className='slider__arrow-left'>
          <span className='arrow'>
            {"<"}
          </span>
        </div>
        <div className='row__posters'>
          {movies.map(movie => (
            <img
              className='row__poster'
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span className='arrow'>
            {">"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Row