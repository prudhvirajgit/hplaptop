// import axios from "axios";
// import React  from "react";
// import { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";


// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const Navigate = useNavigate();
//     function Home() {
//         Navigate("/Home");
//       }
//     const loginclick = (e) => {
//         // alert("HI!")
//         const url = "http://localhost:3000/dev/login";
//         const data = { email: email, password: password };
//         const header = {}
//         axios.post(url, data, header)
//             .then((res) => {
//                 console.log("Response => " + JSON.stringify(res.data))
//                 localStorage.setItem("tokenvariable", res.data)
//                 if (res.data==="Login details incorrect!")
//                 alert("Login details incorrect!")
//                 else if(res.data==="Both the fields are mandatory")
//                 alert("Both the fields are mandatory")
//                 else
//                 Navigate("/Campaginlist")
//             })
//             .catch((err) => {
//                 console.log("Error => " + err)
//             })
//     }
//     return <>
//         <div className="Login_outer">
//             <div className="Login_inner">
//                 <label>LOGIN</label> <br></br>
//                 <input onChange={(e) => { setEmail(e.target.value) }} type={"text"} placeholder="Email">
//                 </input>
//                 {email}
//                 <br></br>
//                 <input onChange={(e) => { setPassword(e.target.value) }} type={"password"} placeholder="Password">
//                 </input>
//                 {password}
//                 <br></br>
//                 <button onClick={(e) => {
//                     loginclick(e)
//                 }}>LOGIN</button>
//             </div>
//         </div>
//     </>
// };


import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./login.css";
import Logo from "./Logo.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    // function Home() {
    //     Navigate("/Home");
    //   }
    const loginclick = (e) => {
        // alert("HI!")
        const url = "http://localhost:3000/dev/login";
        const data = { email: email, password: password };
        const header = {}
        axios.post(url, data, {
            headers: header
        })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data))
                localStorage.setItem("tokenvariable", res.data)
                // Navigate("/home")
                if (res.data==="Login details incorrect!")
                alert("Login details incorrect!")
                else if(res.data==="Both the fields are mandatory")
                alert("Both the fields are mandatory")
                else
                Navigate("/ProspectListpage")
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    }
    function signup(){
        Navigate("/signup");
    }
    return <>
       
        <div className='login_outer'>

<div className='login_outer_row1'>
       <div className='login_outer_row1_inner'>
              <div className='login_outer_row1_inner_row1'>
               {/* <img src={Logo}></img> */}
              <h2 className='login_outer_row1_inner_row1_h2' >Logo</h2>
              </div>
              <div className='login_outer_row1_inner_row2'>
               <h1 className='login_outer_row1_inner_row2_h1' >Welcome!</h1>
              </div>
              <div className='login_outer_row1_inner_row3'>
               Please signin to your account
              </div>
              <div className='login_outer_row1_inner_row4'>
               <input onChange={(e) => { setEmail(e.target.value) }} type={"text"} placeholder="Email"></input>
              </div>
              <div className='login_outer_row1_inner_row5'>
               <input  onChange={(e) => { setPassword(e.target.value) }} type={"password"} placeholder="Password" ></input>
              </div>
              <div className='login_outer_row1_inner_row6'>
               <input type={'checkbox'}></input>
              <label>Remember Me</label>
              <text>Forgot Password?</text>
              </div>
              <div className='login_outer_row1_inner_row7'>
                  <button className='login_outer_row1_inner_row7_button' onClick={(e)=>{loginclick(e)}}>LOGIN</button> 
              </div>
         </div>
</div>

<div className='login_outer_row2'>
      New member? <text onClick={signup}>SignUp</text>
</div>
</div>
</>
};