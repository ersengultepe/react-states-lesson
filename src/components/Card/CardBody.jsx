import React from 'react';


function CardBody(props) {
  const {
    title, detail,
    like, counter, counterHandler
  } = props
  
    return (
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="">{like}</h6>
        <hr />
        <h6>{counter}</h6>
        <button onClick={counterHandler} className="btn btn-success" name="inc">+</button>
        <button onClick={counterHandler} className="btn btn-warning" name="dec">-</button>
        <hr />
        
        <p className="card-text">{detail}</p>
      </div>
    )
  }
  
  export default CardBody;