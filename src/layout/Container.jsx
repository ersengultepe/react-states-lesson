import React from "react";

function Container({content, ...props}) {

  return (
    <div className="container">
      {content}
      <hr />
      {props.children}
    </div>
  )
}

export default Container