import { Route, Routes } from "react-router-dom"
import PopularMovie from "./components/PopularMovie"
import Home from "./components/Home"
import Categories from "./components/Categories"
import SearchMovie from "./components/SearchMovie"
import { getMovie, movieDetail, movieImage, searchMovie } from "./getMovie"
import { useEffect, useState } from "react"
import TopRated from "./components/TopRated"
import MovieDetail from "./components/MovieDetail"

function App() {
  const [params, setParams] = useState("now_playing")
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovie(params).then((res) => {
      setMovies(res)
    })
  }, [params])

  const popularMovie = (popularParams) => {
    setParams(popularParams)
  }
  const topRated = (topRatedParams) => {
    setParams(topRatedParams)
  }

  const baseMovie = (baseMovieParams) => {
    setParams(baseMovieParams)
  }

  const getMovieDetail = (id) => {
    movieDetail(id).then((res) => {
      console.log(res)
      setMovies(res)
    })
  }

  const movieSearch = (querry) => {
    searchMovie(querry).then((res) => {
      setMovies(res)
    })
  }

  return (
    <>
      <div className="container">
        <nav
          style={{ position: "sticky", top: "0" }}
          className="navigation-bar"
        >
          <Categories
            baseMovie={baseMovie}
            topRated={topRated}
            popularMovie={popularMovie}
          />
          <SearchMovie movieSearch={movieSearch} />
        </nav>
      </div>

      <Routes>
        <Route
          path="/"
          element={<Home movie={movies} movieDetail={getMovieDetail} />}
        />
        <Route path="/rated" element={<TopRated movie={movies} />} />
        <Route path="/popular" element={<PopularMovie movie={movies} />} />
        <Route path="/detail" element={<MovieDetail movie={movies} />} />
      </Routes>
    </>
  )
}

export default App
