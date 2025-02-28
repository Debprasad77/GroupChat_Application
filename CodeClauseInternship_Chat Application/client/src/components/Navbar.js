import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#5550a8", boxShadow: "none"  }}>
      <Container maxWidth="lg">
        <Toolbar>
          {/* Logo or Brand Name */}
          <Typography variant="h4"component="div" fontWeight= "bold" sx={{ flexGrow: 1,  ml: -20}}>
            Random Chat
          </Typography>

          {/* Navigation Links */}
          <Button color="inherit" size="large" href="/" sx={{ textTransform: 'none', mr: 2, fontWeight : "bold"}} >
            Home
          </Button>
          <Button color="inherit" size="large" href="/blog" sx={{ textTransform: 'none', mr: 2, fontWeight : "bold"}}>
            Blog
          </Button>
          <Button color="inherit" size="large" href="/about" sx={{ textTransform: 'none', mr: 2, fontWeight : "bold"}}>
            About
          </Button>
          <Button color="inherit" size="large" href="/support" sx={{ textTransform: 'none', mr: 2, fontWeight : "bold"}}>
            Support
          </Button>

          {/* Login Button */}
          <Button variant="contained" size="medium"  href="/login" sx={{textTransform: 'none',ml : 55, mr : -15}}>
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;