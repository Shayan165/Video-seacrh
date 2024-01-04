import React from "react";
import axios from "axios";

function SearchBar({ search, setSearch, setVideo, setVideoid }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=AIzaSyBi0ygLVuPvg_vjAzDS39QtPd7IIxv4-co`
      )
      .then((response) => setVideo(response.data?.items));
    setVideoid(null);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className="input-group mb-3 mt-4"
          style={{ width: "50%", marginLeft: "25%" }}
        >
          <input
            type="text"
            className="form-control shadow-none rounded-start-5 p-2 ps-3"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="border-0 ps-3 pe-3 rounded-end-5">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;

// `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=AIzaSyBy0YRtYm6LO2ENAOt1-fTUCRPqGfZCUiE`
