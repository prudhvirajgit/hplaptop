import "./signup.css";
import Logo from "./Logo.png";
import { useState } from "react";
export default function Signup() {
  const [FirstName, setFirstname] = useState("");
  const [LastName, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setpassword] = useState("");
  const [RePassowrd, setRepassword] = useState("");
  return (
    <>
      <div className="Login_outersignup">
        <div className="outer_row1signup">
          <div className="outer_row11signup">
            <div className="outer_row11_inner1signup">
              <img src={Logo} alt="invalid path"></img>
              <label>
                <h3>Logo</h3>
              </label>
            </div>
            <div className="outer_row11_inner2signup">
              <h3>Welcome!</h3>
              <label>Please signup to your account</label>
            </div>
            <div className="outer_row11_inner3signup">
              <input type="text" placeholder="FirstName" />
              <input type="text" placeholder="LastName" />
            </div>
            <div className="outer_row11_inner4signup">
              <input type="text" placeholder="Email" />
            </div>
            <div className="outer_row11_inner5signup">
              <input type="password" placeholder="Password" />
            </div>
            <div className="outer_row11_inner6signup">
              <input type="password" placeholder="Re-Password" />
            </div>
            <div className="outer_row11_inner7signup">
              <input type="checkbox" />
              <label>
                By Clicking On Register, You Agree To Our
                <label className="Terms_Textsignup">
                  Terms And Conditions
                </label>{" "}
                of use
              </label>
            </div>
            <div className="outer_row11_inner8signup">
              <button className="loginButtonsignup">Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
