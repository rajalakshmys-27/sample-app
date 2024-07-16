import React, { useState, useContext } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/images/Vector.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AppContext from "./AppContext";

const Header = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const { setSelectedDocType } = useContext(AppContext);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchorEl(null);
  };

  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  const handleMenuItemClick = (course) => {
    switch (course) {
      case "html":
        setSelectedDocType("html");
        break;
      case "css":
        setSelectedDocType("css");
        break;
      case "react":
        setSelectedDocType("react");
        break;
      default:
        setSelectedDocType("html");
    }
    handleClose();
  };

  return (
    <AppBar sx={{ backgroundColor: "#FFFFFF" }}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src={logo} alt="logo" />
          {isSmallScreen ? (
            <IconButton
              aria-controls="menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
              color="primary"
              sx={{
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <MenuRoundedIcon
                sx={{
                  fontSize: "40px",
                  color: "#14C38E",
                }}
              />
            </IconButton>
          ) : (
            <div>
              <Button
                sx={{
                  color: "#14C38E",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid #14C38E",
                    backgroundColor: "transparent",
                  },
                  marginRight: "16px",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                aria-controls="home-menu"
                aria-haspopup="true"
                //onClick={handleMenuClick}
              >
                Home
              </Button>

              <Button
                sx={{
                  color: "#14C38E",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid #14C38E",
                    backgroundColor: "transparent",
                  },
                  marginRight: "16px",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                aria-controls="courses-menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
              >
                Courses
              </Button>

              <Button
                sx={{
                  color: "#14C38E",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid #14C38E",
                    backgroundColor: "transparent",
                  },
                  marginRight: "16px",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                aria-controls="teachers-menu"
                aria-haspopup="true"
                //onClick={handleMenuClick}
              >
                Teachers
              </Button>

              <Button
                sx={{
                  color: "#14C38E",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid #14C38E",
                    backgroundColor: "transparent",
                  },
                  marginRight: "16px",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                aria-controls="events-menu"
                aria-haspopup="true"
                //onClick={handleMenuClick}
              >
                Events
              </Button>

              <Button
                sx={{
                  color: "#14C38E",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    borderBottom: "2px solid #14C38E",
                    backgroundColor: "transparent",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
                aria-controls="contact-menu"
                aria-haspopup="true"
                //onClick={handleMenuClick}
              >
                Contact
              </Button>
            </div>
          )}
          <Menu
            id="menu"
            anchorEl={menuAnchorEl}
            keepMounted
            open={Boolean(menuAnchorEl)}
            onClose={handleClose}
            sx={{ width: "50%" }}
          >
            <MenuItem onClick={() => handleMenuItemClick("html")}>
              HTML
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("css")}>CSS</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("javascript")}>
              JAVA SCRIPT
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("react")}>
              REACT JS
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("database")}>
              DATA BASE
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("cloud")}>
              CLOUD
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
