import "./titlebar1.css";
import { GiBeachBag } from "react-icons/gi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import React from "react";
export default function TitleBar() {
  const navigate = useNavigate();
  function Campaigneditpage() {
    navigate("/Campaigneditpage");
  }
  return (
    <>
      <div className="titlebar_top">
        <div className="titlebar_top_col1">
          <div className="titlebar_bagSquare">
            <GiBeachBag className="titlebar_bagIcon" />
          </div >
          <div className="tittlebar_con">
          <div className="titlebar_bagIcon_Products" > Campaign</div>
         
          <div className="tittlebar_button" onClick={Campaigneditpage}><button  >< BsFillPlusCircleFill/> Add Campaign</button></div>
          </div>
        </div>
      </div>
     
    </>
  );
}
