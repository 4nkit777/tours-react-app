import React, { useState } from "react";

export default function Tour({ id, name, info, image, price, removeTourProp }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="card mb-4 shadow min-vw-50 min-vh-50">
      <img src={image} alt={name} className="card-img-top" />
      <footer className="card-body">
        <div className="d-flex flex-row justify-content-around">
          <h3 className="card-title">{name}</h3>
          <h4 className="rounded bg-primary text-light p-1">${price}</h4>
        </div>
        <p className="card-text text-start" style={{ fontSize: "1.3rem" }}>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => setReadMore(!readMore)}
            className="border-0 text-primary bg-light"
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          onClick={() => removeTourProp(id)}
          className="border border-danger p-2 bg-light text-danger"
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
}
