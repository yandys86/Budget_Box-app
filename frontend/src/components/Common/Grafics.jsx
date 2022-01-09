import React from "react";
import imgbig from "../../assets/img/grafic-big.png";
import imgmed from "../../assets/img/grafic-medium.png";
import imgsmall from "../../assets/img/grafic-small.png";

export default function Grafics() {
  return (
    <>
      <div className="graficos">
        <div>
          <img className="img-big" src={imgbig} alt="" />
        </div>
        <div>
          <img className="img-medium" src={imgmed} alt="" />
        </div>
        <div>
          <img className="img-small" src={imgsmall} alt="" />
        </div>
      </div>
    </>
  );
}
