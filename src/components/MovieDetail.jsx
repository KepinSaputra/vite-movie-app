import React from "react"

export default function MovieDetail({ movie }) {
  return (
    <>
      <img
        className="backdrop-image"
        src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
        alt="backdrop_path"
      />
    </>
  )
}
