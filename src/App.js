import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import chipotleLogo from './logo.png'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ColorRing } from  'react-loader-spinner'

function App() {

  const [ isLoading, setIsLoading ] = useState(false)

  const claimItem = () => {
    setIsLoading(true)
    console.log("letsgo")
    let id = document.getElementById("form").value
    fetch("http://localhost:8000/claim/"+id).then(() => {
      window.open("https://outlook.office.com/mail/")
      setIsLoading(false)
    })
    
  }

  return (
    <div className="App">
      <img className="logo" src={chipotleLogo}/>
      <p>Un burrito gratuit pour</p>
      <select name="pets" id="form">
        <option value="0">Martin</option>
        <option value="1">Pierre</option>
        <option value="2">Axel</option>
        <option value="3">Souhail</option>
        <option value="4">Etienne</option>
        <option value="5">Sofiane</option>
        <option value="6">Wim</option>
      </select>
      {
        isLoading ? (
          <ColorRing
            visible={true}
            height = "50"
            width = "50"
            radius = "9"
            color = 'red'
            ariaLabel = 'blocks-loading'     
            colors={['#441500','#441500','#441500','#441500','#441500','#441500','#441500',]}
          />
        ) : (
          <button className='button-5' onClick={claimItem}>
            J'ai faim
          </button>
        )
      }
    </div>
  );
}

export default App;
