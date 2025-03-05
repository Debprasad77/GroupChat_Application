import React from "react";
import { TextField, Checkbox, FormControlLabel, Button, Typography, Paper, Box } from "@mui/material";
import { Facebook } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';
import bgImage from "../assets/bnd.jpg";



const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "-5rem"

      }}
    >
      <Paper sx={{ p: 4, width: 400, textAlign: "center", backgroundColor: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(10px)" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Have an account ?
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Username"
          sx={{ mb: 2, backgroundColor: "rgba(255,255,255,0.3)", borderRadius: "8px" }}
        />
        <TextField
          variant="outlined"
          fullWidth
          type="password"
          placeholder="Password"
          sx={{ mb: 2, backgroundColor: "rgba(255,255,255,0.3)", borderRadius: "8px" }}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ color: "white", mb: 2 }}>
          <FormControlLabel control={<Checkbox sx={{ color: "white" }} />} label="Remember Me" />
          <Typography component="a" href="#" sx={{ textDecoration: "none", cursor: "pointer", fontWeight: "500" }}>Forgot Password ?</Typography>
        </Box>
        <Button variant="contained" fullWidth sx={{ textTransform: "none", fontWeight: "600", backgroundColor: "#FA8128", color: "white", p: 1.5, borderRadius: "20px", mb: 2 }}>
          Log In
        </Button>
        <Typography sx={{ mb: 2, fontWeight: "550" }}>-- Or Sign In With --</Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <GoogleIcon sx={{ fontSize: 40, mx: 1, color: "#4285F4", cursor: "pointer" }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <EmailIcon sx={{ fontSize: 40, mx: 1, color: "#d44638", cursor: "pointer" }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Facebook sx={{ fontSize: 40, mx: 1, color: "#1877F2", cursor: "pointer" }} />
          </a>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
