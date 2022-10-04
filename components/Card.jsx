import React from "react";

const Card = ({ thumbnail }) => {
  return (
    <>
      <img src={thumbnail.url} alt={thumbnail.title} className="card-img" />

      <style jsx>{`
        .card-img {
          width: 30%;
          height: auto;
          max-height: 150px;
          border-radius: 10px;
          margin: 5px;
          filter: drop-shadow(5px 5px 10px #161616);
          object-position: top;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};

export default Card;
