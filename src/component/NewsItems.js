import React from 'react';

const NewsItems = (props) => {
  return (
    <div>
      <div className="card my-3">
        <img src={props.imageUrl} className="card-img-top" alt="news" />
        <div className="card-body">
          <h5 className="card-title">
            {props.title}
            <span className="badge bg-secondary mx-2">{props.source}</span>
          </h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {props.author ? props.author : "Unknown"} on {new Date(props.date).toGMTString()}
            </small>
          </p>
          <a href={props.newsUrl} target="blank" rel="noopener noreferrer" className="btn btn-sm btn-dark ">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
