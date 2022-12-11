import React from "react"
import withState from "../HOC/withState"

interface IProps {
  state?: number
  updateToggle?: (num: number) => void
}

const HoverCounter: React.FC<IProps> = (props) => {
  return (
    <div>
      <button onMouseMove={() => props.updateToggle?.(1)}>Hover</button>
      <span>{props.state}</span>
    </div>
  )
}

export default withState(HoverCounter)
