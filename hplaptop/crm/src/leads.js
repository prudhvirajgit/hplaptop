import "./Sstyle.css";

export default function Signup() {
  return (
    <>
      <div className="Login_outer">
        <div className="outer_row1">
          <div className="outer_row11">
            <div className="outer_row11_inner1"></div>

            <div className="outer_row11_inner2">
              <h3>Leads</h3>
            </div>
            <div className="outer_row11_inner3">
              <input type="text" placeholder="FirstName" />
              <input type="text" placeholder="LastName" />
            </div>
            <div className="outer_row11_inner4">
              <input type="text" placeholder="Email" />
            </div>
            <div className="outer_row11_inner5">
              <input type="password" placeholder="Password" />
            </div>
            <div className="outer_row11_inner6">
              <input type="password" placeholder="Re-Password" />
            </div>
            <div className="outer_row11_inner7">
              <input type="checkbox" />
              <label>
                By Clicking On Register, You Agree To Our
                <label className="Terms_Text">Terms And Conditions</label> of
                use
              </label>
            </div>
            <div className="outer_row11_inner8">
              <button className="loginButton">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
