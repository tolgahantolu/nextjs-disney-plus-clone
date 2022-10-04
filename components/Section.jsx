import Link from "next/link";
import React from "react";
import Card from "./Card";

const Section = ({ videos, type }) => {
  console.log(videos);
  return (
    <>
      <div className="section">
        <h3>{type}</h3>
        <div className="video-feed">
          {videos.map((video) => {
            return (
              <Link key={video.id} href={`/video/${video.slug}`}>
                <a>
                  <Card thumbnail={video.thumbnail} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .section {
        }
      `}</style>
    </>
  );
};

export default Section;
