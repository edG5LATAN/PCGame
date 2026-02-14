import React from "react";
import PixelSnow from "../reactBits/pixelSnow/PixelSnow";
import TrueFocus from "../reactBits/trueFocus/TrueFocus";
import Magnet from "../reactBits/magnet/Magnet";
import "./Header.css";

function Header() {
  return (
    <div className="header_contenedor">
      <PixelSnow
        color="#ffffff"
        flakeSize={0.009}
        minFlakeSize={1.25}
        pixelResolution={350}
        speed={2.3}
        density={0.5}
        direction={125}
        brightness={1}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="round"
      />
      <div className="header_info">
        {/* <img src="./img/gamer1.png" alt="logoEDTecnology.com" /> */}

        <Magnet padding={70} disabled={false} magnetStrength={2}>
          <img src="./img/gamer1.png" alt="logoEDTecnology.com" />
        </Magnet>

        <TrueFocus
          sentence="EDTecnology . com"
          manualMode={false}
          blurAmount={5}
          borderColor="#5227FF"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />
      </div>
    </div>
  );
}

export default Header;
