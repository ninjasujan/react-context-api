import { useContext, useEffect } from "react"
import { CounterContext, ICounterContext } from "../Context/CounterContext"

const Counter = () => {
  const { counter } = useContext(CounterContext) as ICounterContext

  useEffect(() => {
    console.log("[Use context render - ShowCounter.tsx]")
  }, [])

  return (
    <div>
      <h2>{counter}</h2>
    </div>
  )
}

export default Counter
