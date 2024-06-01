import React from "react";
import CustomHook from "./CustomHook";
function App() {
  let { width, height } = CustomHook();
  return (
    <>
      <div>
        <p>width={width}</p>
        <p>height={height}</p>
      </div>
    </>
  );
}

export default App;
