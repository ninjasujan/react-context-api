import React from "react"
import withState from "../HOC/withState"

interface IProps {
  state?: number
  updateToggle?: (num: number) => void
}

const ClickCounter: React.FC<IProps> = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.updateToggle?.(1)
        }}
      >
        click
      </button>
      <span>{props.state}</span>
    </div>
  )
}

export default withState(ClickCounter)
