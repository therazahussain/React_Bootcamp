import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
      setAlert({message:message,type:type})
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#41464b"
      showAlert("Dark Mode Enabled", "success")
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Enabled", "success")
    }
  }

  return (
    <>

      <Navbar title = "TextUtils" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm heading="Try TextUtils - Word and Character Counter | Analyze the Text" mode={mode} showAlert = {showAlert}/>
        {/* <About mode={mode} /> */}
      </div>
      {/* <BrowserRouter>
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter The Text to Analyze" mode={mode} showAlert = {showAlert}/>}/>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        </div>
      </BrowserRouter> */}
    </>
  );
}

export default App;
