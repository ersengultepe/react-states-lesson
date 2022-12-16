import React from 'react';
import useLike from '../../tools/useLike';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

function Card(props) {
  const [like, incrementLike] = useLike(10);

  return (
    <div className="col mb-3">
      <div className="card">
        <CardHeader />

        {props.children && (
          <>
            <hr />
            <h3>Children</h3>
            {props.children}
            <hr />
          </>
        )}

        <CardBody
          title={props.title}
          detail={props.detail}
          like={like}
          counter={props?.counter}
          counterHandler={props?.counterHandler}
        />
        <CardFooter like={like} incrementLike={incrementLike} />
      </div>
    </div>
  );
}

export default Card;
