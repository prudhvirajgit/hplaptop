import React from "react";
import Form from "./Axios/Form";
import Horizontalbar from "./Axios/Horizontalbar";
import LeftBar from "./Axios/LeftBar";
import Normallist from "./Axios/Normallist";
import TitleBar from "./Axios/titlebar";
import Topbar from "./Axios/Topbar";
import { BiSearch } from "react-icons/bi";
import "./Campaigneditpage.css";
// import "./titlebar.css";
import { GiBeachBag } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Campaigneditpage() {

    const [CampaignName, setCampaignName] = useState("");
    const [Startdate, setStartdate] = useState("");
    const [Enddate, setEnddate] = useState("");
    const [Status, setStatus] = useState("");
    const [Owner, setOwner] = useState("");
    const [ParentCampaign, setParentCampaign] = useState("");
    const [show, setShow] = useState(false)
    const [Error1,setError1] = useState("")
    const [Error2,setError2] = useState("")
    const [Error3,setError3] = useState("")
    const [Error4,setError4] = useState("")
    const [Error5,setError5] = useState("")
    const [Error6,setError6] = useState("")
    const [Error,setError] = useState("")
    const handleclick = (e) => {
        setShow(!show)
    };
    // const [error, setError] = useState("");

    const Saveclick = (e) => {
        setError1("")
        setError2("")
        setError3("")
        setError4("")
        setError5("")
        setError6("")
        // const token = localStorage.getItem("tokenvariable");
        const url = "http://localhost:3000/dev/updateCampaign";
        const data = { CampaignName: CampaignName, Startdate: Startdate, Enddate: Enddate, Status: Status, Owner: Owner, ParentCampaign: ParentCampaign, "id": "3" }
        const header = {};
        axios.post(url, data, header)
            .then((res) => {
                console.log("Response==> " + JSON.stringify(res.data))
                let result = res.data+""
                if (result.includes("CampaignName is mandatory"))
                    setError1("CampaignName is mandatory")
                if (result.includes("Startdate is mandatory")) {
                    setError2("Startdate is mandatory")
                }
                if (result.includes("Enddate  is mandatory")) {
                    setError3("Enddate  is mandatory")
                }
                if (result.includes("Status  is mandatory")) {
                    setError4("Status  is mandatory")
                }
                if (result.includes("Owner  is mandatory")) {
                    setError5("Owner  is mandatory")
                }
                if (result.includes("ParentCampaign  is mandatory")) {
                    setError6("ParentCampaign  is mandatory")
                }
                 
                    
                

            })
            .catch((err) => {
                console.log("Error==> " + err)
            })

    }

    useEffect(() => {
        const url = "http://localhost:3000/dev/getsingleCampaign";
        const data = {
            "id": "3",
        };
        const header = {};
        axios.post(url, data, header,)
            .then((res) => {
                console.log("Response==>" + JSON.stringify(res.data))
                
               
                console.log(res.data[0])
                if (res.data.length > 0) {
                    //  console.log(res.data[0].txtParentCampaign)
                    setCampaignName(res.data[0].txtCampaignName)
                    setStartdate(res.data[0].dtStartdate)
                    setEnddate(res.data[0].dtEnddate)
                    setStatus(res.data[0].txtStatus)
                    setOwner(res.data[0].txtOwner)
                    setParentCampaign(res.data[0].txtParentCampaign)
                

                }
            })
            .catch((err) => {
                console.log("Response==> " + JSON.stringify(err))
            })
    }, [])


    return (
        <>
            <div className="Campaigneditpage_topbar">
                <Topbar />

                <div className="Campaigneditpage_topbar2">
                    <div className="Campaigneditpage_topbar2_left">
                        <LeftBar />
                    </div>
                    <div className="Campaigneditpage_topbar2_right">
                        <div className="Campaigneditpage_topbar2_right_1">
                            <div className="Campaigneditpage_topbar2_right_1_1">
                                <div>
                                    <div className="titlebar_top">
                                        <div className="titlebar_top_col1">
                                            <div className="titlebar_bagSquare">
                                                <GiBeachBag className="titlebar_bagIcon" />
                                            </div>
                                            <label><b>Campaign One</b></label>
                                        </div>
                                        <div className="titlebar_top_col2">
                                            {/* <div className="titlebar_top_col21"> */}
                                            {/* <HiDownload className="titlebar_downloadIcon"/> */}
                                            {/* <label>Bulk Import</label> */}
                                            {/* </div> */}
                                            <div className="titlebar_top_col22">
                                                <BsFillPlusCircleFill className="titlebar_plusIcon" />
                                                <label onClick={(e) => {
                                                    Saveclick(e);
                                                }} >Save</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Campaigneditpage_topbar2_right_1_2">
                                <div>
                                    <div className="form_outer">
                                        <div className="form_inner1">
                                            {/* <label>Lead Details</label> */}
                                        </div>
                                        <div className="form_inner3">
                                            <div className="form_inner31">
                                                <label className="text">CampaignName</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={CampaignName} onChange={(e) => { setCampaignName(e.target.value) }} />
                                                <label className="Err">{Error1}</label>
                                            </div>
                                            
                                            <div className="form_inner31">
                                                <label>Parent Campaign</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={ParentCampaign} onChange={(e) => { setParentCampaign(e.target.value) }} />
                                                <label className="Err">{Error6}</label>
                                            </div>
                                            <div className="form_inner31">
                                                <label>Status</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={Status} onChange={(e) => { setStatus(e.target.value) }} />
                                                <label className="Err">{Error4}</label>
                                            </div>
                                        </div>
                                        <div className="form_inner3">
                                            <div className="form_inner31">
                                                <label>Start Date</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={Startdate} onChange={(e) => { setStartdate(e.target.value) }} />
                                                <label className="Err">{Error2}</label>
                                            </div>
                                            <div className="form_inner31">
                                                <label>End Date</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={Enddate} onChange={(e) => { setEnddate(e.target.value) }} />
                                                <label className="Err">{Error3}</label>
                                            </div>
                                            <div className="form_inner31">
                                                <label>Owner</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={Owner} onChange={(e) => { setOwner(e.target.value) }} />
                                                <label className="Err">{Error5}</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="Campaigneditpage_topbar2_right_2">
                            <div className="Campaigneditpage_topbar2_right_2_left">
                                <div>
                                    <div className="Normallist">
                                        <div className="Normallist_row1">
                                            <label className="Normallist_row1_label">Leads</label>
                                            <div className="Normallist_row1_button">
                                                <button onClick={(e) => { handleclick(e) }} >ADD</button>
                                            </div>
                                        </div>
                                        <div className="Normallist_row2"></div>
                                        <div className="Normallist_row3">
                                            <label className="Normallist_row3_label1">FirstName</label>
                                            <label className="Normallist_row3_label2">LastName</label>
                                            <label className="Normallist_row3_label3">Status</label>
                                            <label className="Normallist_row3_label4">Last Updated On</label>
                                        </div>
                                        <div className="Normallist_row4"></div>
                                        <Table />
                                        <Table />
                                        <Table />
                                    </div>
                                </div>
                            </div>{

                            }
                            {
                            show ? (
                            <div className="checkList_outer">
                                <div className="checkList_inner1">
                                    <div className="checkList_inner11">
                                        <BiSearch className="checkList_searchIcon" />
                                        <input type={"text"} placeholder="Search Campaign" />
                                    </div>
                                    <div className="checkList_inner12">
                                        <label>ADD</label>
                                    </div>
                                </div>
                                <div className="checkList_outer_inner2">
                                    <div className="checkList_inner2">
                                        <input type={"checkbox"} className="checkBox" />
                                        <label>Campaign One</label>
                                    </div>
                                    <List />
                                    <List />
                                    <List />
                                    <List />
                                    <List />
                                    <List />
                                </div>
                            </div>
                            ) : (
                            <></>
                            )}
                            <div className="Campaigneditpage_topbar2_right_2_right">
                                <Horizontalbar />
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )

}


function Table() {
    return <>
        <div className="Normallist_row5">
            <label className="Normallist_row5_label1">John</label>
            <label className="Normallist_row5_label2">Smith</label>
            <label className="Normallist_row5_label3">Confirmed</label>
            <label className="Normallist_row5_label4">2022-01-01</label>
        </div>
    </>
}
function List() {
    return (
        <>
            <div className="checkList_inner2">
                <input type={"checkbox"} className="checkBox" />
                <label>Campaign One</label>
            </div>
        </>
    );
}
