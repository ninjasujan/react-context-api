import { useContext } from "react"
import { CounterContext, ICounterContext } from "../Context/CounterContext"

const Counter = () => {
  const { setCounter, counter } = useContext(CounterContext) as ICounterContext
  return <button onClick={() => setCounter(counter + 1)}>Click</button>
}

export default Counter
