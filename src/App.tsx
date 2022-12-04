import React from "react"
import CounterContextProvider from "./Context/CounterContext"

/** Component */
import Counter from "./Component/Counter"
import ShowCounter from "./Component/ShowCounter"

const App = () => {
  return (
    <CounterContextProvider>
      <React.Fragment>
        <h1>React Context API</h1>
        <img
          src="/images/react_public.png"
          width="200"
          height="200"
          alt="React Logo Public"
        />

        <Counter />
        <ShowCounter />
      </React.Fragment>
    </CounterContextProvider>
  )
}

export default App
