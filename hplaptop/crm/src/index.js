import React from "react";
import ReactDom from "react-dom/client";


import Navigation from "./Campaginlit";
import Campaignedit from "./Campaigneditpage";




const root = ReactDom.createRoot(document.getElementById("root"));
root.render(

    <React.StrictMode>
        <Navigation />
    </React.StrictMode>
)