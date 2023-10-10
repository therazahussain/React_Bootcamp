import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text,setText] = useState("")

  function handletoUp(){
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
  }

  function handletoLo(){
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success")
  }

  function handletoCl(){
    setText("")
    props.showAlert("Text Box Cleared","success")
  }

  function handletoCopy(){
    navigator.clipboard.writeText(text)
    props.showAlert("Text copied to Clipboard","success")
  }

  function handletobase46(){
    setText(btoa(text));
    props.showAlert("Base64 Converted to Text","success")
  }

  function handletoString(){
    setText(atob(text));
    props.showAlert("Text Converted to Base64 ","success")
  }

  function handleChange(event) {
    setText(event.target.value)
  }

 
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h2 className="mb-2">{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="6" value={text} onChange={handleChange} style={{color:props.mode==="dark"?"white":"black",backgroundColor:props.mode==="dark"?"#4c5258":"white"}}></textarea>
      </div>
    <button disabled = {text.length ===0} type="submit" className="btn btn-primary my-1 mx-1 " onClick={handletoUp}>Convert To Uppercase</button>
    <button disabled = {text.length ===0} type="submit" className="btn btn-primary my-1 mx-1" onClick={handletoLo}>Convert To Lowercase</button>
    <button disabled = {text.length ===0} type="submit" className="btn btn-primary my-1 mx-1" onClick={handletoCl}>Clear Text</button>
    <button disabled = {text.length ===0} type="submit" className="btn btn-primary my-1 mx-1" onClick={handletoCopy}>Copy Text</button>
    <button disabled = {text.length ===0} type="submit" className="btn btn-primary my-1 mx-1" onClick={handletobase46}>Convert To Base64 from String</button>
    <button disabled = {text.length ===0} type="submit" className="btn btn-primary my-1 mx-1" onClick={handletoString}>Convert To String from Base64</button>
    </div>
    <div className="container my-2" style={{color:props.mode==="dark"?"white":"black"}}>
      <h2>Your text Summary</h2>
      <p>{text.split(/\s+/).filter(word => {return(word.length !== 0)}).length} words and {text.length} characters</p>
      <p>It will take {0.008 * text.split(/\s+/).filter(word => {return(word.length !== 0)}).length} Minutes to read the Above Text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview."}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {heading: PropTypes.string.isRequired}