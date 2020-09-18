import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">        


        <a
          className="App-link"
          href="https://apod.nasa.gov/apod/astropix.html"
          target="_blank"
          rel="noopener noreferrer"
        >
        NASA Astronomy Picture of the Day

        </a>

        <img src={logo} className="App-logo" alt="logo" />


        <iframe src="https://projectsiteA.pythonanywhere.com/" title="PythonAnywhere App" width="100%" height= "500 px" overflow= 'auto'></iframe>



        



   
      </header>
    </div> 

  );
}

export default App;
