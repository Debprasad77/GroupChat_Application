import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Email, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import DiscordIcon from '@mui/icons-material/SportsEsports';

const Support = () => {
    return (
        <>
            <Box
                sx={{
                    background: "linear-gradient(90deg, #9333EA, #6366F1)",
                    textAlign: "center",
                    py: 8,
                    px: 2,
                    color: "white",
                    marginTop: "4.4rem",
                }}
            >
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                    We're Here to Help
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}
                >
                    Need assistance? Our support team is ready to help you with any questions or issues you may have.
                </Typography>
            </Box>

            <Box sx={{ py: 10, backgroundColor: "#f9f9f9", textAlign: "center", mb: -10 }}>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                backgroundColor: "#c7d2fe",
                                p: 7,
                                width: "70%",
                                borderRadius: "16px",
                                textAlign: "center",
                                boxShadow: 3,
                                marginLeft: "11rem",
                            }}
                        >
                            <DiscordIcon sx={{ fontSize: 50, color: "#4f46e5" }} />
                            <Typography variant="h6" fontWeight="bold" mt={2}>
                                Join Our Discord
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Get real-time support and connect with our
                                <br />community on Discord.
                            </Typography>
                            <Button variant="contained" sx={{ mt: 2, backgroundColor: "#4f46e5", textTransform: "none" }}>
                                Join Discord Server
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                backgroundColor: "#e9d5ff",
                                p: 7,
                                width: "70%",
                                borderRadius: "16px",
                                textAlign: "center",
                                boxShadow: 3,
                            }}
                        >
                            <Email sx={{ fontSize: 50, color: "#9333ea" }} />
                            <Typography variant="h6" fontWeight="bold" mt={2}>
                                Email Support
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Prefer email? Reach out to our support team directly.
                            </Typography>
                            <Button variant="contained" sx={{ mt: 2, backgroundColor: "#9333ea", textTransform: "none" }}>
                                Email Us
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 8 }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, color: "#00008B" }}>
                        Connect With Us
                    </Typography>
                    <a href="https://x.com/Debprasad77" target="_blank" rel="noopener noreferrer">
                        <Twitter sx={{ fontSize: 40, mx: 1, color: "#6366f1", cursor: "pointer" }} />
                    </a>

                    <a href="https://www.instagram.com/debprasad33/" target="_blank" rel="noopener noreferrer">
                        <Instagram sx={{ fontSize: 40, mx: 1, color: "#6366f1", cursor: "pointer" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/debprasad77/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn sx={{ fontSize: 40, mx: 1, color: "#6366f1", cursor: "pointer" }} />
                    </a>

                </Box>
            </Box>


        </>
    );
};

export default Support;
