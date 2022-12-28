import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import axios from '../../api/axios'
import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce';

const SearchPage = () => {

  const navigate = useNavigate(); // 이동할 수 있게 함
  const [searchResults, setSearchResults] = useState([])

  const useQuery = () => {
    return new URLSearchParams (useLocation().search)
  }

  let query = useQuery();
  const searchTerm = useDebounce(query.get("q"), 500); // input에 타이핑한 텍스트값이 들어가게 됨


  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm)
    }
  }, [searchTerm]) //텍스트가 바뀔때마다 호출되게 deps배열에 넣어주기

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      )
      console.log(response.data.results)
      setSearchResults(response.data.results)
    } catch (error) {
      console.log(error);
    }
  }

if (searchResults.length > 0) {
  return (
    <section className="search-container">
      {
        searchResults.map(movie => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
            return (
              <div className = 'movie' key ={movie.id}>
                <div
                  onClick={() => navigate(`/${movie.id}`)}
                  className='movie__column-poster'>
                <img 
                  src={movieImageUrl}
                  alt='movie'
                  className='movie__poster' />
                </div>
              </div>
            )
          }
        })
      }
    </section>
  )
} else {
  return (
    <section className='no-results'>
      <div className='no-results__text'>
        <p>
          찾고자 하는 검색어"{searchTerm}"에 맞는 영화가 없습니다.
        </p>
      </div>
    </section>
  )
}
}

export default SearchPage