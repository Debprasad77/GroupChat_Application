import React from "react";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpg';


import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
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
          Your Platform for Random Text and Video Chats
        </Typography>
        <Typography
          variant="h6"
          sx={{ maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}
        >
          Friend-Talk is your ultimate platform for chatting with strangers, engaging in random video chats,
          and making new friends from around the globe. Experience seamless connections similar to Omegle and OmeTV.
        </Typography>
      </Box>

      {/* Our Journey Section */}
      <Box sx={{ py: 10, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ marginBottom: "2rem" }}>
            Our Journey
          </Typography>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
              >
                <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: "1rem" }}>
                  The Vision
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  friend-Talk was created with the vision to break down barriers and connect people from different backgrounds.
                  Our founders wanted to offer a safe and exciting platform for spontaneous conversations and new friendships,
                  similar to Omegle and OmeTV.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                src={image1}
                alt="Vision"
                style={{ width: "50%", borderRadius: "50%" }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={6} alignItems="center" sx={{ mt: 6 }}>
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                src={image2}
                alt="Building Connections"
                style={{ width: "50%", height: "50% ", borderRadius: "50%" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: "1rem" }}>
                  Building Connections
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  In 2025, we launched friend-Talk with the mission to help people connect in a fast-paced, digital world.
                  Our platform quickly became popular, providing users with an easy and fun way to meet strangers, engage
                  in random video chats, and build meaningful connections, similar to Omegle and OmeTV.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>

          <Grid container spacing={6} alignItems="center" sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: "1rem" }}>
                  Looking Ahead
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Today, Friend-Talk is one of the most exciting platforms for making new friends, chatting with strangers,
                  and engaging in random video chats. We are dedicated to constantly innovating,
                  improving user safety, and introducing new features to enhance your experience,
                  ensuring you get the best out of our service similar to Omegle and OmeTV.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                src={image3}
                alt="Vision"
                style={{ width: "50%", borderRadius: "50%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Impact Section */}
      <Box sx={{ py: 10, backgroundColor: "#111", color: "white", textAlign: "center" , marginBottom: "-5rem"}}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Impact
          </Typography>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" fontWeight="bold" color="#6366F1">
                1M+
              </Typography>
              <Typography variant="body1" color="gray">
                Monthly Active Users
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" fontWeight="bold" color="#6366F1">
                5M+
              </Typography>
              <Typography variant="body1" color="gray">
                Video Chats per Week
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" fontWeight="bold" color="#6366F1">
                8M+
              </Typography>
              <Typography variant="body1" color="gray">
                Messages Sent Daily
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>



    </>
  );
};

export default About;
