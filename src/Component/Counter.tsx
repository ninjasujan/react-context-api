import { useContext, useEffect } from "react"
import { CounterContext, ICounterContext } from "../Context/CounterContext"

const Counter = () => {
  const { setCounter, counter } = useContext(CounterContext) as ICounterContext

  useEffect(() => {
    console.log("[Use context render - Counter.tsx]")
  }, [])

  return <button onClick={() => setCounter(counter + 1)}>Click</button>
}

export default Counter
