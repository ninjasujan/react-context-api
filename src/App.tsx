import React from "react"
import HoverComp from "./Component/HoverCounter"
import ClickComp from "./Component/ClickCounter"

const App = () => {
  return (
    <React.Fragment>
      <h1>React Context API</h1>
      <img
        src="/images/react_public.png"
        width="200"
        height="200"
        alt="React Logo Public"
      />
      <HoverComp />
      <ClickComp />
    </React.Fragment>
  )
}

export default App
