import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";
import "./Filter.css";
export default function Admin() {
  return (
    <>
      <div className="Filtrer_Filter">
        <div className="Filter_left">
          <div className=" Filtrt_header">
            <label>prospects</label>
            <RiArrowDropDownLine />
          </div>
          <div className=" Filter_list">
            <div className=" Filter_tickCircle">
              <TiTick className=" Filter_tickIcon" />
            </div>
            <label>Campaign one</label>
          </div>
          <div className=" Filter_list">
            <FaCircle className=" Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className=" Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className=" Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="Filter_list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
        </div>

        <div className="Filter_center">
          <div className="Filter_header">
            <label>Interested</label>
            <RiArrowDropDownLine />
          </div>
          <div className="Filter_list">
            <div className="Filter_tickCircle">
              <TiTick className="Filter_tickIcon" />
            </div>
            <label>Campaign one</label>
          </div>
          <div className="Filter_list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="Filter_list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="Filter_list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="Filter_list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="Filter_list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
        </div>

        <div className="Filter_right">
          <div className="Filter_header">
            <label>NotInterested</label>
            <RiArrowDropDownLine />
          </div>
          <div className="Filter_list">
            <div className="Filter_tickCircle">
              <TiTick className="Filter_tickIcon" />
            </div>
            <label>Campaign one</label>
          </div>
          <div className="Filter_list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="Filter_list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="Filter_list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="Filter_list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
          <div className="Filter_list">
            <FaCircle className="Filter_circleIcon" />
            <label>Campaign one</label>
          </div>
        </div>
      </div>
      <div>
        <div className="Filter_Filtertitle">
          <AiFillDelete />
          <label>Clear Filter</label>
        </div>
      </div>
      {/* </div> */}
      {/* </div>
        </div> */}
    </>
  );
}
