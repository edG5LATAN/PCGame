import React from "react";
import "./Footer.css";
import RotatingText from "../reactBits/rotatingText/RotatingText";

function Footer() {
  return (
    <div className="footer_contenedor">
      <p className="cursor-target">EDTecnology.com creando: </p>{" "}
      <RotatingText
        className="custom-container"
        texts={["Aplicaciones Web","Paginas Web", "Video Juegos", "Pagina Woo Commerce", "Video Juegos Android"]}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"first"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
  );
}

export default Footer;
