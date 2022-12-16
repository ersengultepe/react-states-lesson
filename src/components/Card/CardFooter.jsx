import React from 'react';

function CardFooter(props) {
  const { like, incrementLike } = props;

  return (
    <div className="card-footer">
      <a href="#" className="btn btn-primary" onClick={incrementLike}>
        Like {like}
      </a>
    </div>
  );
}

export default CardFooter;
