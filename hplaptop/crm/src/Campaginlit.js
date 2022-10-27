
// import "./Campaignlist.css";
// import axios from "axios";
// import { useEffect } from "react";
// import React from "react";
// import Topbar from "./Components/Topbar";
// import Leftbar from "./Components/Leftbar";
// import Titlebar from "./Components/Titlebar";
// import Filterbar from "./Components/Filterbar";
// import Mainlist from "./Components/Mainlist";

// export default function Campaginlist() {
 


//   return (
//     <>
//       <div className="Campaignlist">
//         <div className="Campaignlist1">
//           <Topbar />
//         </div>
//         <div className="Campaignlist2">
//           <div className="Campaignlist2_left">
//             <Leftbar />
//           </div>
//           <div className="Campaignlist2_right">
//             <div className="Campaignlist2_right_content">
//               <div className="Campaignlist2_right_content_row1">
//                 <Titlebar />
//               </div>
//               <div className="Campaignlist2_right_content_row2">
//                 <Filterbar />
//               </div>
//               <div className="Campaignlist2_right_content_row3">
//                 <Mainlist />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import "./Campaignlist.css";
import React from "react";
import Topbar from "./Components/Topbar";
import Leftbar from "./Components/Leftbar";
import Titlebar from "./Components/Titlebar";
import Filterbar from "./Components/Filterbar";
import Mainlist from "./Components/Mainlist";

export default function ProspectListpage() {
  return (
    <>
      <div className="ProspectListpage">
        <div className="ProspectListpage_Admindashboard">
          <Topbar />
        </div>

        <div className="ProspectListpage_LeftBar">
          <Leftbar />
        </div>
        <div className="ProspectListpage_container">
  
          <div className="ProspectListpage_Filterbar">
            <Titlebar />
          </div>
          <div className="ProspectListpage_Filterbar">
            <Filterbar />
          </div>
          <div className="ProspectListpage_Mainlist">
            <Mainlist />
          </div>
        </div>
      </div>
    </>
  );
}
