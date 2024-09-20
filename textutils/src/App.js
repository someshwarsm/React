import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light')
  const [backgroundColor, setBackgroundColor] = useState("white")

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode("dark")
      setBackgroundColor("#1a1a1a")
      document.body.style.backgroundColor= "#1a1a1a"
    }
    else{
      setMode("light")
      setBackgroundColor("white")
      document.body.style.backgroundColor= "white"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3"><TextForm heading="Enter your text below" mode={mode} backgroundColor={backgroundColor}/></div>
      
    </>
  );
}


export default App;
