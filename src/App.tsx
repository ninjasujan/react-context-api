import Divider from "@mui/material/Divider"
import MuiPage from "./pages/MuiLayout"
import SXProp from "./pages/SXProp"
import StyledComp from "./pages/StyledComp"
import MuiComp from "./pages/MuiComp"

const App = () => {
  return (
    <div>
      <MuiPage />
      <Divider light />
      <SXProp />
      <Divider light />
      <StyledComp header="My New Title" />
      <MuiComp />
      <Divider light />
    </div>
  )
}

export default App
