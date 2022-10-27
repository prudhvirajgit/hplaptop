import { useState } from "react";
export default function Variable() {
  const [text, setText] = useState();

  return (
    <>
      <input type={"text"} onChange={(e) => setText(e.target.value)} />
      <label>{text}</label>
    </>
  );
}
