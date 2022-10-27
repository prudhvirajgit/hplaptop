import React from "react";
import { BrowserRouter,Route,  Routes } from "react-router-dom";
import Campaignlistpage from "./campaignlistpage";
import Campaigneditpage from "./Campaigneditpage";
export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Campaignlistpage />}>
            </Route>
            <Route path="/Campaignedit" element={<Campaigneditpage />}>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
