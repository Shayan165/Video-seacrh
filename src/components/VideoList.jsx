import React from "react";
import "./VideoList.css";
function VideoList({ video, videoid, setVideoid }) {
  return (
    <>
      <ul
        className={
          !videoid
            ? `d-flex flex-column justify-content-center align-items-center  me-4`
            : `d-flex flex-column justify-content-end me-2 videolist`
        }
      >
        {video &&
          video.map((item) => (
            <li className="list-unstyled">
              <div key={item.id?.videoId} style={{ cursor: "pointer" }}>
                <div>
                  <img
                    src={item.snippet?.thumbnails?.medium?.url}
                    style={{ width: "300px", cursor: "pointer" }}
                    className="rounded mt-3"
                    alt="..."
                    onClick={() => setVideoid(item.id?.videoId)}
                  />
                </div>

                <div
                  onClick={() => setVideoid(item.id?.videoId)}
                  style={{
                    width: "250px",
                    paddingTop: "20px",
                    paddingLeft: "10px",
                    cursor: "pointer",
                  }}
                >
                  <h6>{item.snippet?.title}</h6>
                  <p>{item.snippet?.channelTitle}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

export default VideoList;
