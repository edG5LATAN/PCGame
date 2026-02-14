import React from "react";
import "./Home.css";
import ElectricBorder from '../reactBits/electricBorder/ElectricBorder';
import TargetCursor from "../reactBits/targetCursor/TargetCursor";
import { juegos } from "../service/Service";

function Home() {
  return (
    <div className="home_contenedor">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <h2>Juegos para PC</h2>
      <div className="home_cards">
       {
        juegos.map((res,index)=>{
          return  <ElectricBorder 
          key={index}   
          color="#7df9ff"
          speed={1}
          chaos={0.12}
          thickness={2}
          style={{ borderRadius: 16, width: "300px", height: "auto" }}
        >
          <div className="home_card">
            <img src={res.imagen} alt="card imagen" />
            <h3 className="cursor-target">{res.titulo}</h3>
            <p style={{ margin: "6px 0 0", opacity: 0.8 }}>
              {res.informacion}
            </p>
            <button onClick={()=>window.open(res.enviar, '_blank')} className="cursor-target">Jugar</button>
          </div>
        </ElectricBorder>
        })
       }
      </div>
    </div>
  );
}

export default Home;
