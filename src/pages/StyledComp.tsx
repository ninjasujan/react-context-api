import React from "react"
import { styled } from "@mui/system"
import Grid from "@mui/material/Grid"
import useMediaQuery from "@mui/material/useMediaQuery"

interface IStyledComp {
  header: string
}

const MyWrapper = styled("div", {
  shouldForwardProp: (prop: any) => prop !== "isSx" && prop !== "isMd",
})<{
  isSx: boolean
  isMd: boolean
}>(({ isSx, isMd, theme }) => ({
  backgroundColor: "#fff",
  height: "300px",
  width: "80%",
  margin: "20px auto",
  "& p": {
    textAlign: "center",
    color: theme.palette.primary,
    backgroundColor: isSx ? "#e1e1e1" : "#567124",
  },
  "& h3.title-bar": {
    textAlign: "center",
    color: "#000",
  },
  "@media screen and (max-width: 600px)": {
    backgroundColor: "#000",
  },
}))

const MyGrid = styled(Grid, {
  shouldForwardProp: (prop: string) => prop !== "isMd",
})<{ isMd: boolean }>(({ isMd, theme }) => ({
  backgroundColor: theme.palette.primary.main,
  "& .MuiGrid-item": {},
}))

const Item = styled("div")({
  height: "300px",
  width: "300px",
  backgroundColor: "#c1c1c1",
  boxSizing: "border-box",
  margin: "0 auto",
})

const StyledComp: React.FC<IStyledComp> = ({ header }) => {
  const matches = useMediaQuery("(min-width:700px)")
  return (
    <>
      <MyWrapper isSx={true} isMd={false}>
        <h3 className="title-bar">Title Bar</h3>
        <p>{header}</p>
        <span>My wrapper</span>
      </MyWrapper>
      <MyGrid container spacing={3} isMd={matches}>
        <Grid item xs={12} md={4}>
          <Item />
        </Grid>
        <Grid item xs={12} md={4}>
          <Item />
        </Grid>
        <Grid item xs={12} md={4}>
          <Item />
        </Grid>
      </MyGrid>
    </>
  )
}

export default StyledComp
