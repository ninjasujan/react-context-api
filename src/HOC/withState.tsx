import React, { useState } from "react"

const withToggle = <T extends object>(
  WrappedComponent: React.ComponentType<T>
) => {
  const DerivedComp = (hocProps: T) => {
    const [state, updateState] = useState(0)

    const updateToggleState = (count: number) => {
      updateState((prevState: number) => prevState + count)
    }

    return (
      <WrappedComponent
        {...hocProps}
        state={state}
        updateToggle={updateToggleState}
      />
    )
  }
  return DerivedComp
}

export default withToggle
