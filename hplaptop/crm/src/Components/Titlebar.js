import "./Titlebar.css";
import React from "react";

import { GiBeachBag } from "react-icons/gi";
import { BsFillPlusCircleFill } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

export default function TitleBar() {
  // const navigate = useNavigate();
  // function Campaginedit() {
  //    navigate("/Campaginedit");
  // }
  return (
    <>
      <div className="Titlebar_top">
        <div className="Titlebar_top_col1">
          <div className="Titlebar_bagSquare">
            <GiBeachBag className="Titlebar_bagIcon" />
          </div>
          <label>Campaign</label>
        </div>
        <div className="Titlebar_top_col2">
          <div className="Titlebar_top_col22">
            <BsFillPlusCircleFill className="Titlebar_plusIcon" />
            {/* <label onClick={Campaginedit} >AddCampaign</label> */}
            <label >AddCampaign</label>
          </div>
        </div>
      </div>
    </>
  );
}
