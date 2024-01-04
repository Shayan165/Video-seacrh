import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function VideoDetail({ videoid }) {
  const [videodetail, setVideodetail] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=AIzaSyBi0ygLVuPvg_vjAzDS39QtPd7IIxv4-co`
      )
      .then((response) => setVideodetail(response.data?.items));
  }, [videoid]);

  return (
    <div>
      <div
        className="container-fluid"
        style={{ marginLeft: "100px", marginTop: "50px" }}
      >
        <iframe
          width="820"
          height="415"
          src={`https://www.youtube.com/embed/${videoid}`}
          frameborder="0"
        ></iframe>
      </div>
      <div className="container">
        {videodetail &&
          videodetail.map((detail) => (
            <div key={detail.id}>
              <h6
                style={{
                  display: "inline-block",
                  fontSize: "1.025rem",
                  fontWeight: "bold",
                  padding: "20px 0px 0px 0px",
                }}
              >
                {detail.snippet?.title}
              </h6>
              <h6 style={{ fontWeight: "bold" }}>
                {detail.snippet?.channelTitle}
              </h6>
              <p style={{ width: "820px" }}>{detail.snippet?.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default VideoDetail;
