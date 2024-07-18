import React from "react";
import "./Card.css";

export default function Card({
  imgSrc,
  spanTag,
  constentHead,
  constentPara,
  likes,
  bookmarks,
  dislikes,
  color
}) {
  return (
    <div className="card" style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className="card__overlay">
        <div className="card__body">
          <span style={{ color: color }} className="card__body__date">
            {spanTag}
          </span>
          <h1 className="card__body__head">{constentHead}</h1>
          <p className="card__body__content">{constentPara}</p>
        </div>
      </div>
      <div style={{ backgroundColor: color }} className="card__footer">
        <div className="card__Footer__first">
          <div>
            <p>{likes}</p>
          </div>
        </div>
        <div className="card__Footer__second">
          <div>
            <p>{bookmarks}</p>
          </div>
        </div>
        <div className="card__Footer__third">
          <div>
            <p>{dislikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
