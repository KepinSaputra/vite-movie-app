import axios from "axios"

export async function getMovie(params) {
  const movie = await axios.get(
    import.meta.env.VITE_BASE_URL +
      `/movie/${params}?api_key=` +
      import.meta.env.VITE_API_KEY
  )
  return movie.data.results
}

export async function searchMovie(querry) {
  const searchedMovies = await axios.get(
    import.meta.env.VITE_BASE_URL +
      `/search/movie?query=${querry}&api_key=` +
      import.meta.env.VITE_API_KEY
  )
  return searchedMovies.data.results
}

export async function movieDetail(id) {
  const detail = await axios.get(
    import.meta.env.VITE_BASE_URL +
      `/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
  )
  return detail.data
}
export async function movieImage(id) {
  const imgDetail = await axios.get(
    import.meta.env.VITE_BASE_URL +
      `/movie/${id}/image&api_key=${import.meta.env.VITE_API_KEY}`
  )
  return imgDetail.data
}
