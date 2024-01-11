import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import logo from '../assets/simbie-logo.png'

export default function Header() {
    return (
    <AppBar position="static">
      <Toolbar>
        <Box mr={2}>
          <NavLink to="/dashboard">
            <img src={logo} className="logo" />
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
    )
}
