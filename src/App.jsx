import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

function App() {
  const [search, setSearch] = useState("");
  const [video, setVideo] = useState("");
  const [videoid, setVideoid] = useState("");

  console.log(search);

  return (
    <>
    <h2 className="text-center">Video Search</h2>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setVideo={setVideo}
        setVideoid={setVideoid}
      />
      {videoid ? (
        <VideoDetail video={video} search={search} videoid={videoid} />
      ) : (
        ""
      )}

      <VideoList video={video} videoid={videoid} setVideoid={setVideoid} />
    </>
  );
}

export default App;
