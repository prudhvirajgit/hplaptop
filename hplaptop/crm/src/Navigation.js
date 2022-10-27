import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import React from "react";
import Campaginlist from "./Campaginlit";
import Campagineditpage from "./Campaigneditpage";



export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/Campaignlist" element={<Campaginlist/>}></Route> 
                <Route path="/Campaigneditpage" element={<Campagineditpage/>}></Route>
            </Routes>
        </BrowserRouter>
);
}