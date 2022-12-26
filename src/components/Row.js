import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import MovieModal from './MovieModal';
import './row.css';

const Row = ({ title, id, fetchUrl }) => {

  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState({})


  useEffect(() => {
    fetchMovieData();
  }, [])

  const fetchMovieData = async () => {
    const response = await axios.get(fetchUrl)
    setMovies(response.data.results)
  }

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie)
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div
          className='slider__arrow-left'
          onClick={() => {
            document.getElementById(id).scrollLeft -= (window.innerWidth - 80)
          }}
        >
          <div className='arrow'>
            {"<"}
          </div>
        </div>
        <div id={id} className='row__posters'>
          {movies.map(movie => (
            <img
              className='row__poster'
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div className='slider__arrow-right'
          onClick={() => {
            document.getElementById(id).scrollLeft += (window.innerWidth - 80)
          }}
        >
          <div className='arrow'>
            {">"}
          </div>
        </div>
      </div>

      {modalOpen
        ? <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
        //x버튼 누르면 모달오픈false만들기 위해 setModalOpen도 내려줌
        : null}

    </div>
  )
}

export default Row