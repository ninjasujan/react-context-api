import React, { useState, createContext } from "react"

export interface ICounterContext {
  counter: number
  setCounter: (counter: number) => void
}

interface IProps {
  children: JSX.Element
}

export const CounterContext = createContext<ICounterContext | null>(null)

const Counter: React.FC<IProps> = (props) => {
  const [counter, setCounter] = useState(0)

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {props.children}
    </CounterContext.Provider>
  )
}

export default Counter
