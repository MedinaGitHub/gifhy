import {memo} from "react";
import { Link } from "wouter";
import "./Gif.css";

function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading={'lazy'} src={url} alt="" />
      </Link>
    </div>
  );
}

export default  memo(Gif);