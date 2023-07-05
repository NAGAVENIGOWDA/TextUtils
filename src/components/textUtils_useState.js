import React, { useState } from "react";
import "../style.css";

//avg user takes 1 min to read 125 words --1 word--0.008 min then calculate time
export default function TextForm(props) {
  document.title="Text Utils -Home"
  const [addr, setaddr] = useState("");
  function handleOnchange(event) {
    setaddr(event.target.value);
  }
  function handleOnclickup() {
    let newText = addr.toUpperCase();
    setaddr(newText);
    document.title="Text Utils-UpperCase"
  }
  function handleOnclicklo() {
    let newText = addr.toLowerCase();
    setaddr(newText);
    document.title="Text Utils-LowerCase"
  }
  function handleclear() {
    setaddr(" ");
    document.title="Text Utils"
  }

  function handleSearch() {
    const iele = document.querySelector("#search");
    const tele = document.querySelector(".form-control");
    document.title="Text Utils-Search"
    if (tele.value == "" || iele.value == "") {
      alert("cannot search");
      return;
    }
    const words = addr.split(" ");

    const searchWord = words.includes(iele.value);
    if (searchWord === true) {
      alert("word is present");
    } else {
      alert("the word is not present");
    }
  }

  function handlecopy() {
    var text = document.getElementById("my-box");
    text.select();

    navigator.clipboard.writeText(text.value);
    document.title="Text Utils-Copy"
  }


  const words=addr.split(' ');
  let countWords=0;
  for(let item of words){
    if(item=='') continue;
    else countWords++;
  }

if(props.lightMode){
  document.body.style.backgroundColor="white"
  document.body.style.color="black"
}
else{
  document.body.style.backgroundColor="black"
  document.body.style.color="white"
}
  return (
    
    
    <div className="container">
     
        <div>
          <h2>{props.placeholder}</h2>
          <textarea
            name=" textArea"
            className="form-control my-3 bg-dark text-white "
            id="my-box"
            rows="10"
            cols="150"
            onChange={handleOnchange}
            value={addr}
          />
        </div>
        <div>
          <div className="buttons my-4">
            <button className="btn  btn-primary mx-3" onClick={handleOnclickup}>
              convert to upperCase
            </button>
            <button className="btn  btn-primary mx-3" onClick={handleOnclicklo}>
              convert to LowerCase
            </button>
            <button className="btn  btn-primary mx-3 " onClick={handleclear}>
              clear text
            </button>
            <button className="btn  btn-primary mx-3 " onClick={handlecopy}>
              copy text
            </button>
          </div>
          <div>
            <input
              id="search"
              className=" mx-3 my-3 bg-black text-white"
              type="text"
              placeholder="search a word here"
              size={45}
            />
            <button className="  btn btn-primary" onClick={handleSearch}>
              search
            </button>
          </div>
          <h2>Text Summary:</h2>
          <h5>
            number of words : {countWords}   
          </h5>
          <h5> number of chars :{addr.length}</h5>
         
          <h6>Minutes read : {countWords===0?0:0.085 * addr.split(" ").length}min</h6>
          <h3>Preview:</h3>
          <p>{addr}</p>
        </div>
      
      </div>
  );
}
