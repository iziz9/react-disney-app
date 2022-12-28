import axios from '../../api/axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { isCompositeComponent } from 'react-dom/test-utils';

const DatailPage = () => {
  const {movieId} = useParams();

  const [movie, setMovie] = useState({}) // state가 변해야 리액트 렌더링되기 때문에 화면을 보여줄 수 있게 state 사용
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `movie/${movieId}`
        )
        console.log(response)
        setMovie(response.data)
      } catch (error) {
        console.log(error)
        navigate(-1)
      }
    }
    fetchData()

  }, [movieId])
  
  return (
    <section>
      <img 
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt='poster'
      />
    </section>
  )
}

export default DatailPage