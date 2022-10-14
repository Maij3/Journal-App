import { Box } from "@mui/material";
import { SideBarMovil } from "./SideBarMovil";
import { SideBarDesktop } from "./SideBarDesktop";
//SideBar
export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        display: { xs: "none", sm: "none", xl: "block" },
      }}
    >
      <SideBarDesktop drawerWidth={drawerWidth} />
      <SideBarMovil drawerWidth={drawerWidth} />
    </Box>
  );
};
