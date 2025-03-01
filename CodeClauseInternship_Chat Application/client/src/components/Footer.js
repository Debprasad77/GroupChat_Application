import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import DiscordIcon from '@mui/icons-material/SportsEsports'; // Using this as a placeholder for Discord
import TikTokIcon from '@mui/icons-material/MusicNote'; // Using this as a placeholder for TikTok

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgb(57, 53, 78)', // Dark background
        color: 'white',
        py: 3,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Logo and Name */}
          <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Box sx={{ flexGrow: 1, ml: -10, display: "flex"}}>
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "60px", // to make the logo bigger
                  maxHeight: "100%", // Prevent it from exceeding the Navbar height
                  width: "auto", // Maintain aspect ratio
                  objectFit: "contain", // Prevent stretching
                  borderRadius: "5%", // Make it a circle
                }}
              />
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} sm={5} sx={{ textAlign: 'center', marginLeft: '-10px', marginRight: 'auto' }}>
            <Link href="#" color="inherit" sx={{ mx: 1, textDecoration: 'none' }}>
              Terms Of Service
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1, textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1, textDecoration: 'none' }}>
              Community Guidelines
            </Link>

          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} sm={2} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
              <DiscordIcon />
            </IconButton>
            <IconButton href="#" target="_blank" sx={{ color: 'white' }}>
              <TikTokIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Box mt={3} sx={{ borderTop: '1px solid #333', pt: 2 }}>
          <Typography variant="body2" align="center">
            All rights reserved. @Debprasad Manna
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
