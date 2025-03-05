import React from "react";
import { Box, Typography} from "@mui/material";


const Blog = () => {
    return (
        <>
            <Box
                sx={{
                    background: "linear-gradient(90deg, #9333EA, #6366F1)",
                    textAlign: "center",
                    py: 15,
                    px: 2,
                    color: "white",
                    marginTop: "4.4rem",
                    height: "65.5vh",
                    marginBottom: "-4.9rem",
                }}
            >
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                   Comming Soon !!
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ maxWidth: "800px", mx: "auto", lineHeight: 4.6}}
                >
                    We are working on some amazing content for you. Stay tuned
                    for more updates.
                </Typography>
            </Box>

           


        </>
    );
};

export default Blog;
