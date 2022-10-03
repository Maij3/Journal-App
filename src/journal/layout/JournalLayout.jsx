import { Box, Toolbar } from "@mui/material";
import {useSelector} from "react-redux";
import { Navbar, SideBar, Footer } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  
  return (
    <Box>
      <Box
        sx={{ display: "flex" }}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Navbar drawerWidth={drawerWidth} />
        <SideBar drawerWidth={drawerWidth} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Box>
  );
};
