import React, { useState, useRef} from 'react'
function Textform (props) {
    const [text, setText] = useState("");
    const Text_Elem = useRef("");
const HandleUpClick = () =>{
  let newText = text.toUpperCase();
  setText(newText);
}
const HandleDownClick = () =>{
  let newText = text.toLowerCase();
  setText(newText);
}
const RemoveExtaSpace = () =>{
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "));
}
// console.log(Text_Elem.current)
const copyText = () =>{
//  let text = document.getElementById("myBox");
let text = Text_Elem.current;
 text.select(0, 999);
 navigator.clipboard.writeText(text.value);
 props.showAlert("Text Has Been Copied", "success");
}
const HandleBoldClick = () =>{
  if (Text_Elem.current.style.fontWeight !== "bold") {
    
    Text_Elem.current.style.fontWeight = "bold";
  }
  else{
      Text_Elem.current.style.fontWeight = "normal" 
  }
}
const HandleItalicClick = () =>{
  if (Text_Elem.current.style.fontStyle !== "italic") {
    Text_Elem.current.style.fontStyle = "italic";
  }
  else{
      Text_Elem.current.style.fontStyle = "normal"; 
  }
}
const HandleUnderLine = () =>{
  if (Text_Elem.current.style.textDecoration !== "underline") {
    Text_Elem.current.style.textDecoration="underline";
  }
  else{
      Text_Elem.current.style.textDecoration = "none"; 
  }
}
const HandleLineBreak = () =>{
  let newText = text + '\n';
  setText(newText)
//    console.log(newText)
}
const HandleOnChange=(e)=>{
  setText(e.target.value);
  
}
  return(
  <>
  <div className="container my-3 d-flex justify-content-end ">
  <button type="button" className="btn btn-primary my-1" onClick={copyText}>Copy Text</button>
  </div>
  <div className="container my-1 " style={{color:props.mode === 'light'? 'dark' : 'light'}}>
  <div className="mb-3" >
<textarea ref={Text_Elem} style={{backgroundColor:props.mode === 'light'? 'white' : 'rgb(128 124 124)', color:props.mode === 'light'? 'black' : 'white'}} className="form-control" id="myBox" rows="3" value={text} onChange={HandleOnChange}></textarea>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={HandleUpClick}>Upper Case</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={HandleDownClick}>Lower Case</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={HandleBoldClick}>Bold</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={HandleItalicClick}>Italic</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={HandleUnderLine}>UnderLine</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={HandleLineBreak}>Line Break</button>
  <button type="button" className="btn btn-primary my-3 mx-2" onClick={RemoveExtaSpace}>Remove Extra Spaces</button>
  
  </div>
  </div>
  <div className="container" style={{color:props.mode === 'light'? 'black' : 'white'}}>
      <h3>your Text Summary</h3>
      <p>{text.split(" ").length-1} words, {text.length} Characters</p>
      
  </div>
  </>
  );
}
export{Textform};
