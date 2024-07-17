
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const[input, setInput]=useState("");
  return (
    <div>
        
        <p>Enter Your Name :</p>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        {input && <p>{`Hello ${input} !`}</p>}
    </div>
  )
}

export default App
