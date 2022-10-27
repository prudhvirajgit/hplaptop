import React, { useState } from "react";
import "./Model.css";
export default function Page() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <Model show={show} handleClick={handleClick} />
      <div className="page">
        Model Sample
        <button onClick={handleClick}>Click Here!</button>
      </div>
    </>
  );
}

function Model({ show, handleClick }) {
  return show ? (
    <div className="modelcontainer">
      <div className="model">
        <h1>Model Title</h1>
        <p>Model Message</p>
        <button onClick={handleClick}>Close</button>
      </div>
    </div>
  ) : (
    <></>
  );
}
