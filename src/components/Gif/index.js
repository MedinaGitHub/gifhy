import { memo } from "react";
import { Link } from "wouter";
import Fav from 'components/Fav'
import "./Gif.css";

function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <div className="Gif-buttons">
        <Fav id={id}></Fav>
      </div>
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading={'lazy'} src={url} alt="" />
      </Link>
    </div>
  );
}

export default memo(Gif);