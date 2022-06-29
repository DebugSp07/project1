import React  from 'react'
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import {useState} from 'react';
import Alert from './component/Alert';
import About from './component/About';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

//import { connect } from "react-redux";



function App() {
    const [alert, setAlert] = useState(null);
    const toogleMode = (event)=> {
        if (mode === "web1") {
            setMode("web2");
            setAlert("welcome to dark mode ");
            setTimeout(() => {
                setAlert(null);
            }, 500);
        } else {
            setMode("web1");
            setAlert("welcome to light mode");
            setTimeout(() => {
                setAlert(null);
            }, 500);
        }
    }
    const [mode, setMode] = useState("web1");
    
    return (
        <>
            <Router>

            <div className={mode}>
                <Navbar tittle="TextUtils.." bg={mode} />
                <Alert alert={alert}/>
                <div className="container-fluid">

                <div className="form-check form-switch" align="left">
                    <input className="form-check-input" type="checkbox" role="switch" onClick={toogleMode} id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                    </div>
                    <div className="container my-3">
                        <Routes>
                            <Route path="/about" element={<About mode={mode} />} />
                            <Route path="/" element={<Textform heading="Text to analyze below" bg={mode} />} />
                        </Routes>   
                    </div>
           
                </div>
            </Router>           

           
        </>
            );
}





export default App;

    
             