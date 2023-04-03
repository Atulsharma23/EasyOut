import React, { useState } from "react";

export default function TextForm(props) {
  //Functions for uppercase
  const HandleUpClick = () => {
    console.log("Uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const HandleUpChange = (event) => {
    console.log("onchange is fired");
    setText(event.target.value);
  };
  //Functions for uppercase ends here

  //functions for lower case starts here
const HandleLowClick = ()=>{
  console.log("Handle low click is clicked "+ text);
let newText =  text.toLowerCase();
setText(newText);
}

  //functions for lower case ends here





  const [text, setText] = useState("Enter text here");
  return (
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="mybox" class="form-label"></label>
        <textarea
          className="form-control"
          id="mybox"
          value={text}
          rows="6"
          onChange={HandleUpChange}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={HandleUpClick}
      >
        Convert to Uppercase
      </button>
      <span></span>
      <button type="button" class="btn btn-danger" onClick={HandleLowClick}>
        Convert to Lowercase
      </button>
    </div>
  );
}
