import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import logo from '../assets/simbie-logo.png'


export default function Header() {
    return (
    <AppBar position="static">
      <Toolbar>
        <Box mr={2}>
          <img src={logo} className="logo" />
        </Box>
      </Toolbar>
    </AppBar>
    )
}
