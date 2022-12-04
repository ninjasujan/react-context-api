import { useContext } from "react"
import { CounterContext, ICounterContext } from "../Context/CounterContext"

const Counter = () => {
  const { counter } = useContext(CounterContext) as ICounterContext
  return (
    <div>
      <h2>{counter}</h2>
    </div>
  )
}

export default Counter
