import React from "react"
import Button from "@mui/material/Button"
import { styled } from "@mui/system"

const MuiWrapper = styled("div")(({ theme }) => ({
  margin: "50px",
}))

const MuiComp = () => {
  return (
    <MuiWrapper>
      <Button>Contained</Button>
    </MuiWrapper>
  )
}

export default MuiComp
