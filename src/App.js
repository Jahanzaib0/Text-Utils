
import './App.css';
import { Navbar } from './components/Navbar.mjs';
import { Textform } from './components/Textform.mjs';
import React, { useState } from 'react'
import { Alert } from './components/alert.mjs';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

 const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type : type
    });
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }
  const toggleMode=()=>{
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#154c79";
      showAlert("Dark Mode has been Enabled", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success")
    }
  }
  return (
   <>
   <Navbar mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
    <Textform mode={mode} showAlert={showAlert}/>
   </>
  );
}

export default App;
