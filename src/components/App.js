
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const[input, setInput]=useState("");
  return (
    <div>
        
        <h3>Enter Your Name :</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        {input && <p>{`Hello ${input} !`}</p>}
    </div>
  )
}

export default App
