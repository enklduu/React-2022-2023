import React from 'react'
import "./card.css";


const Card = ({ nombre, profesion, url }) => {
    return(
    <div className="card">
        <img src={url}/>
        <h2>Me llamo {nombre}</h2>
        <h3>Mi profesión - {profesion}</h3>
        <button type='button' onClick={difuminar}>Difuminar</button>
    </div>
  )
}
function difuminar(e){
    e.preventDefault();
    const $photo = e.target.parentElement.querySelector("img");
    $photo.style.setProperty("filter","blur(10px)")
  }

export default Card