import React, { useState } from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, Button } from "@mui/material";
import { Chat, Videocam, PersonAdd, Tag, Shield, Star } from "@mui/icons-material";



import JoinForm from './joinForm';
import ChatWindow from './ChatWindow';
import './Body.css';

const Body = (props) => {
  const [showJoinForm, setShowJoinForm] = useState(false);

  return (
    <Container maxWidth="lg" className="body-container">
      {showJoinForm && <div className="blur-background"></div>}

      {!props.joined ? (
        <>
          <Typography variant="h3" align="center" gutterBottom sx={{ marginTop: 13, color: 'Black', fontWeight: 600 }} >
            Talk to strangers, Make friends!
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
            Experience a random chat alternative to find friends, connect with people, and chat with strangers worldwide!
          </Typography>

          <Grid container spacing={3} className="options-grid" sx={{ marginBottom: 10 }}>
            <Grid item xs={12} sm={6}>
              <Card className="option-card">
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Text Chat
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Connect with people through text messages.
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<Chat />}
                    className="start-button"
                    onClick={() => setShowJoinForm(true)}
                  >
                    Start Text Chat
                  </Button>

                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className="option-card">
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Video Chat
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Connect with people through video calls.
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<Videocam />}
                    className="start-button"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h5" align="center" gutterBottom sx={{ marginTop: 4 }}>
            Anonymous Chat, Meet new people, and make new friends!
          </Typography>
          <Typography variant="h6" color="blue" align="center" gutterBottom sx={{ marginTop: 2, fontWeight: 400 }}>
            Find strangers worldwide, the new modern Omegle and OmeTV alternative. Connect with real people, enjoy ad-free text and video chats, and build genuine friendships.
          </Typography>

          {/* New Section */}
          <Grid container spacing={3} sx={{ marginTop: 10, marginBottom: 10 }}>
            <Grid item xs={12} sm={4}>
              <Card className="feature-card">
                <CardContent>
                  <Videocam style={{ fontSize: 40, color: '#6a4ffc' }} />
                  <Typography variant="h5" gutterBottom>
                    Video Chat
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Experience authentic face-to-face encounters with real people from all over the world.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className="feature-card">
                <CardContent>
                  <PersonAdd style={{ fontSize: 40, color: '#6a4ffc' }} />
                  <Typography variant="h5" gutterBottom>
                    Friends & History
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Had a fun chat but skipped by accident? Find them in your chat history and add them as a friend.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3.8}>
              <Card className="feature-card">
                <CardContent>
                  <Tag style={{ fontSize: 40, color: '#6a4ffc' }} />
                  <Typography variant="h5" gutterBottom>
                    Search Filters
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Use interests, genders, or locations to filter the strangers you meet.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className="feature-card">
                <CardContent>
                  <Chat style={{ fontSize: 40, color: '#6a4ffc' }} />
                  <Typography variant="h5" gutterBottom>
                    Text Chat
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Not in the mood for video? Chat with strangers via text messages.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className="feature-card">
                <CardContent>
                  <Shield style={{ fontSize: 40, color: '#6a4ffc' }} />
                  <Typography variant="h5" gutterBottom>
                    Safety & Moderation
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We use advanced AI technologies to keep your chats clean and safe.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3.8}>
              <Card className="feature-card">
                <CardContent>
                  <Star style={{ fontSize: 40, color: '#6a4ffc' }} />
                  <Typography variant="h5" gutterBottom>
                    Feature Rich
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    From sending photos and videos to voice calls and sharing GIFs, we have it all.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* New Section */}

          {/* <Grid container spacing={3} sx={{ marginTop: 10, marginBottom: 10 , backgroundColor: "rgb(149, 131, 243)", borderRadius: "30px", padding: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center" gutterBottom sx={{ color: 'White', fontWeight: 800 }}>
                Don't take our word for it
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" gutterBottom sx={{ color: 'Black', fontWeight: 400 }}>
                We've asked random strangers, both men and women, to try our platform for video and text chat. Here's what they had to say about our safe space for chatting with strangers:
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className="testimonial-card" sx={{ backgroundColor: "rgb(187, 176, 240)", color: "black", borderRadius: "20px", padding: 2 }}>
                <CardContent>
                  <Typography variant="h3" color="white">
                    “
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 2 }}>
                    — This is the best Omegle alternative I've tried! It made connecting with strangers through  chat fun and easy. It's user-friendly, quick, and I've had engaging conversations with people worldwide. A fantastic way to meet new people and find friends in a safe environment.
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Typography variant="subtitle1" color="white">
                      Stranger #1
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className="testimonial-card" sx={{ backgroundColor: "rgb(187, 176, 240)", color: "black", borderRadius: "20px", padding: 2 }}>
                <CardContent>
                  <Typography variant="h3" color="white">
                    “
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 2 }}>
                    I recently felt lonely and struggled to make friends, but this platform changed that. It's simple to find someone to text chat with, and I've made new friends from all over the globe.
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Typography variant="subtitle1" color="white">
                      Stranger #2
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className="testimonial-card" sx={{ backgroundColor: "rgb(187, 176, 240)", color: "black", borderRadius: "20px", padding: 2 }}>
                <CardContent>
                  <Typography variant="h3" color="white">
                    “
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 2 }}>
                    Skeptical at first, I quickly became a fan of this platform as an alternative to other random chat sites. It's spam-free, well-moderated, and helped me connect with people worldwide.
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Typography variant="subtitle1" color="white">
                      Stranger #3
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid> */}

          <Grid
            container
            spacing={2}
            sx={{
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "rgb(149, 131, 243)",
              borderRadius: "30px",
              padding: 4,

            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{ color: 'white', fontWeight: 800 }}
              >
                Don't take our word for it
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                gutterBottom
                sx={{ color: 'black', fontWeight: 400 }}
              >
                We've asked random strangers, both men and women, to try our platform for video and text chat. Here's what they had to say about our safe space for chatting with strangers:
              </Typography>
            </Grid>

            {[
              {
                quote: "— This is the best Omegle alternative I've tried! It made connecting with strangers through chat fun and easy. It's user-friendly, quick, and I've had engaging conversations with people worldwide. A fantastic way to meet new people and find friends in a safe environment.",
                name: "Stranger #1",
              },
              {
                quote: "I recently felt lonely and struggled to make friends, but this platform changed that. It's simple to find someone to text chat with, and I've made new friends from all over the globe.",
                name: "Stranger #2",
              },
              {
                quote: "Skeptical at first, I quickly became a fan of this platform as an alternative to other random chat sites. It's spam-free, well-moderated, and helped me connect with people worldwide.",
                name: "Stranger #3",
              }
            ].map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  className="testimonial-card"
                  sx={{
                    backgroundColor: "rgb(187, 176, 240)",
                    color: "black",
                    borderRadius: "20px",
                    padding: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <CardContent>
                    <Typography variant="h2" color="white">
                      “
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: 1 }}>
                      {testimonial.quote}
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Typography variant="subtitle1" color="White">
                        {testimonial.name}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>


          <Box
            sx={{
              background: 'linear-gradient(90deg, #6f3dd2 0%, #4c23aa 100%)',
              borderRadius: '30px',
              color: 'white',
              padding: 4,
              marginTop: 5,
              marginBottom: 5
            }}
          >
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Stay in the loop
                </Typography>
                <Typography variant="body1">
                  Join our Discord Server to get updates before anyone else.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'white',
                    color: '#4c23aa',
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    marginRight: 2,
                    '&:hover': {
                      backgroundColor: '#f1f1f1'
                    }
                  }}
                >
                  Join Discord
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  Contact Us
                </Button>
              </Grid>
            </Grid>
          </Box>




        </>
      ) : (
        <ChatWindow {...props} />
      )}

      {showJoinForm && (
        <div className="popup-container">
          <button className="close-popup-button" onClick={() => setShowJoinForm(false)}>
            ×
          </button>
          <JoinForm
            username={props.username}
            setUsername={props.setUsername}
            room={props.room}
            setRoom={props.setRoom}
            handleJoin={(e) => {
              props.handleJoin(e);
              setShowJoinForm(false);
            }}
          />
        </div>
      )}
    </Container>
  );
};

export default Body;
