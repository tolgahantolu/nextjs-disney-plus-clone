import React, { useState } from "react";
import { getVideoDetailsData } from "../../services";

const changeToSeen = async (slug) => {
  await fetch("/api/changeToSeen", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  });
};

const VideoDetails = ({ video }) => {
  console.log(video);

  const [watching, setWatching] = useState(false);

  return (
    <>
      {!watching && (
        <img
          src={video.thumbnail.url}
          alt={video.title}
          className="video-img"
        />
      )}
      {!watching && (
        <div className="info">
          <p>{video.tags.join(", ")}</p>
          <p>{video.description}</p>
          <a href="">
            <p>Go back</p>
          </a>
          <button
            className="video-overlay"
            onClick={() => {
              changeToSeen(video.slug);
              //watching ? setWatching(false) : setWatching(true);
              setWatching(!watching);
            }}
          >
            Play
          </button>
        </div>
      )}

      {watching && (
        <>
          <video controls autoPlay width="100%">
            <source src={video.mp4.url} type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={() => {
              setWatching(false);
            }}
          >
            go back
          </button>
        </>
      )}

      <style jsx>{`
        .video-img {
          width: 100%;
          height: auto;
          max-height: 80vh;
          object-position: top;
          object-fit: cover;
          position: relative;
        }

        .info {
          position: relative;
          margin-top: 50px;
          margin-left: 50px;
          max-width: 50%;

          position: absolute;
          top: 25%;
          left: 10%;
          transform: translate(-10%, -25%);

          .video-overlay {
          }
        }
      `}</style>
    </>
  );
};

export default VideoDetails;

export const getServerSideProps = async ({ params: { slug } }) => {
  const video = await getVideoDetailsData(slug);

  return {
    props: {
      video,
    },
  };
};
