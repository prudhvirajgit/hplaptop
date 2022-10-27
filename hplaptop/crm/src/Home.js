import axios from "axios";
import React, { useEffect } from "react";


export default function Home() {
    const token = localStorage.getItem("tokenvariable");
    useEffect(() => {
        const url = "http://localhost:3000/dev/verifyotp";
        const data = {};
        const header = { token: token };
        axios.post(url, data, { header: header, })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data))
            })
            .catch((err) => {
                console.log("Error => " + err)
            });
    }, []);
    return <div>Token: {token} </div>
}