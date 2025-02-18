import React from "react"
import {useState} from "react"

const Miroir = () => {
    const [Reflet,setReflet] = useState(false);
    const styleMiroir = {opacity: Reflet ? 1 : 0,};
    return (
      <div className="card bg-dark border border-warning-subtle miroir">
        <img src="public\aventurier.jpg" className="card-img-top img-fluid" alt="Aventurier" style={styleMiroir} onMouseEnter={() => {setReflet(true)}} onMouseLeave={() =>{setReflet(false)}}/>
        <div className="card-body">
          <h5 className="card-title">Miroir mon beau miroir</h5>
          <p className="card-text">Quel est mon reflet ?</p>
        </div>
      </div>
    );
  };
export default function exercice3(){
    return(

    <section id="exercice3" className="my-5 flex self-center">
        <h2>Le miroir de beauté</h2>
        <Miroir />

        <p>Vous avez l'air d'être un aventurier plein de charme dites-moi.</p>
      </section>
    )
}