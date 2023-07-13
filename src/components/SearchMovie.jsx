import React, { useState } from "react"

export default function SearchMovie({ movieSearch }) {
  const [inputValue, setInputvalue] = useState("")

  function handleOnSubmit(e) {
    e.preventDefault()
    if (inputValue === "") alert("please input value")
    if (inputValue.length < 3) {
      alert("Please Input 3 or more keyeord")
    } else {
      movieSearch(inputValue)
      setInputvalue("")
    }
  }
  return (
    <form className="search-form" onSubmit={handleOnSubmit}>
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          value={inputValue}
          placeholder="Search Movie..."
          onChange={(e) => setInputvalue(e.target.value)}
        />
      </label>
      <button>Search</button>
    </form>
  )
}
