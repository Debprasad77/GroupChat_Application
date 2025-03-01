import React from "react";
import icon from "../assets/icon.png";

import { AppBar, Toolbar, Box, Button, Container } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#5550a8", boxShadow: "none" }}>
      <Container maxWidth="lg">
        <Toolbar>

        {/* icon logo */}
        <Box sx={{ flexGrow: 1, ml: -20, display: "flex", alignItems: "center" }}>
            <img src={icon} alt="Icon"
              style={{
                height: "70px", // Adjust this to make the logo bigger
                maxHeight: "100%", // Prevent it from exceeding the Navbar height
                width: "auto", // Maintain aspect ratio
                objectFit: "contain", // Prevent stretching
              }}
            />
          </Box>

          {/* Logo or Brand Name */}
          

          {/* Navigation Links */}
          <Button color="inherit" size="large" href="/" sx={{ textTransform: 'none', mr: 2, fontWeight: "bold" }} >
            Home
          </Button>
          <Button color="inherit" size="large" href="/blog" sx={{ textTransform: 'none', mr: 2, fontWeight: "bold" }}>
            Blog
          </Button>
          <Button color="inherit" size="large" href="/about" sx={{ textTransform: 'none', mr: 2, fontWeight: "bold" }}>
            About
          </Button>
          <Button color="inherit" size="large" href="/support" sx={{ textTransform: 'none', mr: 2, fontWeight: "bold" }}>
            Support
          </Button>

          {/* Login Button */}
          <Button variant="contained" size="medium" href="/login" sx={{ textTransform: 'none', ml: 55, mr: -15 }}>
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;