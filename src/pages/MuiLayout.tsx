import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Unstable_Grid2"
import Paper from "@mui/material/Paper"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

const Item: React.FC<{ text: string }> = (props) => {
  return (
    <Paper
      style={{
        width: "150px",
        height: "150px",
        textAlign: "center",
        margin: "0 auto",
        border: "1px solid #000",
      }}
    >
      <Typography>{props.text}</Typography>
    </Paper>
  )
}

const MuiPage: React.FC<{}> = () => {
  return (
    <Container fixed sx={{ backgroundColor: "#e1e1e1", margin: "30px" }}>
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={3}>
          <Item text="grid" />
        </Grid>
        <Grid xs={12} md={6} lg={3}>
          <Item text="grid" />
        </Grid>
        <Grid xs={12} md={6} lg={3}>
          <Item text="grid" />
        </Grid>
        <Grid xs={12} md={6} lg={3}>
          <Item text="grid" />
        </Grid>
      </Grid>

      <Stack
        sx={{ padding: "20px" }}
        useFlexGap
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 3, sm: 3, md: 3 }}
      >
        <Item text="flex" />
        <Item text="flex" />
        <Item text="flex" />
        <Item text="flex" />
      </Stack>
    </Container>
  )
}

export default MuiPage
