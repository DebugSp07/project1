// JavaScript source code
import React from 'react'
import { useState } from 'react';



function Textform(prop) {
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }






    const handleOnClick = (event) => {
        //console.log("UPPERCASE was CLICKED")
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnClick_l = (event) => {
        //console.log("UPPERCASE was CLICKED")
        let newText = text.toLowerCase();
        setText(newText);
    }


    const handleOnChange = (event) => {
        //console.log("ON_CHANGE")
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className="container" style={{ color: prop.bg === "web1" ? "black" : "white" }}>
                <div>
                    <h4> {prop.heading}</h4>
            <div classNaame="mb-3">
                <textarea classNaame="form-control" value={text} onChange={handleOnChange} id="mybox" rows="3" cols="100"></textarea>
                </div>
                    <button className="btn btn-primary" onClick={handleOnClick}>ConvertUppeercase</button>
                    <button className="btn btn-primary" onClick={handleOnClick_l}>ConvertLowerercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

                </div>
            </div>
            <div className="container my-3" style={{ color: prop.bg === "web1" ? "black" : "white" }} >
                <h5> Your Text Summary</h5>
                <p>Total words={text.split(" ").length} and Total Charecters={text.length}</p>
                <p> {0.008 * text.split(" ").length}Minutes to read</p>
            </div>
            

        </>
            );

        
}
export default Textform