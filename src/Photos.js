import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6">
                <a href="photo.src.original" rel="noreferrer">
                  <img
                    className="photo-search"
                    key={index}
                    alt="search results"
                    src={photo.src.landscape}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
