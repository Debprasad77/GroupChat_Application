import React from "react";
import icon from "../assets/icon.png";
import { AppBar, Toolbar, Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#5550a8", boxShadow: "none" }}>
      <Container maxWidth="lg">
        <Toolbar>
          {/* icon logo */}
          <Box
            sx={{ flexGrow: 1, ml: -20, display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => (window.location.href = "/")}
          >
            <img
              src={icon}
              alt="Icon"
              style={{
                height: "70px",
                maxHeight: "100%",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Navigation Links */}
          <Button color="inherit" size="large" component={Link} to="/" sx={{ textTransform: 'none', mr: 2, fontWeight: "bold" }}>
            Home
          </Button>
          <Button color="inherit" size="large" component={Link} to="/blog" sx={{ textTransform: 'none', mr: 2, fontWeight: "bold" }}>
            Blog
          </Button>
          <Button color="inherit" size="large" component={Link} to="/about" sx={{ textTransform: 'none', mr: 2, fontWeight: "bold" }}>
            About
          </Button>
          <Button color="inherit" size="large" component={Link} to="/support" sx={{ textTransform: 'none', mr: 2, fontWeight: "bold" }}>
            Support
          </Button>

          {/* Login Button */}
          <Button variant="contained" size="medium" component={Link} to="/login" sx={{ textTransform: 'none', ml: 55, mr: -15 }}>
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;