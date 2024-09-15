import React from 'react'
import { useState } from 'react'
import './components.css'


export default function TextForm(props) {
    const [text, setText] = useState();
    
    function onTextAreaChange(event){
        setText(event.target.value);
    }

    function onUpCaseBtnClick(event){
        let data = text;
        data = data.toUpperCase()
        setText(data)
    }

    function onLowCaseBtnClick(event){
        let data = text;
        data = data.toLowerCase()
        setText(data)
    }

    function onCopyBtnClick(event){
        navigator.clipboard.writeText(text)
        showCopiedMsg();
    }

    function showCopiedMsg() {
        const button = document.getElementById("copy-btn");
        
        let content = button.textContent
        console.log(content)

        button.textContent = "Copied!"
    
        // Remove the tooltip after 2 seconds
        setTimeout(function() {
            button.textContent = content
        }, 2000);
    }

    function onClearBtnClick(event){
        setText("")
    }

  return (
    <div style={{color: props.mode==="light"?"black":"white", backgroundColor: props.backgroundColor}}>
      <h3>{props.heading}</h3>
      <div >
        <textarea className={`form-control ${props.mode === "dark" ? "light-placeholder" : "dark-placeholder"}`} rows="10" value={text} placeholder="Enter Your text here" onChange={onTextAreaChange} style={{color: props.mode==="light"?"black":"white", backgroundColor: props.backgroundColor}}></textarea>
        <button className='btn btn-info mx-3 my-3' onClick={onUpCaseBtnClick} >Convert to UpperCase</button>
        <button className='btn btn-info mx-3 my-3' onClick={onLowCaseBtnClick}  >Convert to LowerCase</button>
        <button className='btn btn-info mx-3 my-3' id="copy-btn" onClick={onCopyBtnClick} >Copy to Clipboard</button>
        <button className='btn btn-info mx-3 my-3' onClick={onClearBtnClick}  >Clear text</button>

    </div>
    </div>
  )
}
