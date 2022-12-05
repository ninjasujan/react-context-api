import { useContext, useEffect } from "react"
import { CounterContext, ICounterContext } from "../Context/CounterContext"

const CheckCounter = () => {
  const {} = useContext(CounterContext) as ICounterContext

  useEffect(() => {
    console.log("[Use context render - CheckCounter.tsx]")
  }, [])

  return (
    <>
      <h3>Check counter</h3>
    </>
  )
}

export default CheckCounter
