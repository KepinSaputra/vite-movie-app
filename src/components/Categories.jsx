import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvePath.pathname, end: true })
  return (
    <h3 className={isActive ? "active" : ""}>
      <Link className="route" to={to} {...props}>
        {children}
      </Link>
    </h3>
  )
}

export default function Categories({ baseMovie, topRated, popularMovie }) {
  function handlePopularClick() {
    popularMovie("popular")
  }
  function handleTopRatedClick() {
    topRated("top_rated")
  }
  function handleBaseMovieClick() {
    baseMovie("now_playing")
  }
  return (
    <>
      <div className="categories">
        <CustomLink onClick={handleBaseMovieClick} to="/">
          Home
        </CustomLink>
        <CustomLink onClick={handleTopRatedClick} to="/rated">
          Top Rated
        </CustomLink>
        <CustomLink onClick={handlePopularClick} to="/popular">
          Popular Movies
        </CustomLink>
      </div>
    </>
  )
}
