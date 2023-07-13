import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Home({ movie, movieDetail }) {
  const navigate = useNavigate()

  const MovieList = () => {
    function handleOnClick(id) {
      navigate("/detail")
      movieDetail(id)
    }
    return movie.map((movie) => {
      return (
        <div
          onClick={() => {
            handleOnClick(movie.id)
          }}
          className="movie-container"
          key={movie.id}
        >
          <img
            className="poster-image"
            src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
          />
          <div className="poster-shadow"></div>
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <h4>Release Date: {movie.release_date}</h4>
            <h4>Rating: {movie.vote_average.toFixed(1)} / 10</h4>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="movie-grid">
      <MovieList />
    </div>
  )
}
