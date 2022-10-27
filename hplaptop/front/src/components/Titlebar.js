import "./Tittlebar.css";
import { GiBeachBag } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Titlebar() {
  const navigate = useNavigate();
  function Campaigneditpage() {
    navigate("/Campaignedit");
  }
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
            <label onClick={Campaigneditpage}>Add Campaign</label>
          </div>
        </div>
      </div>
    </>
  );
}
