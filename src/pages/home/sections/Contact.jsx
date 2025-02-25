import React, { useState } from "react";
// import emailjs from '@emailjs/browser';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#f5fff5' }}>
      <Container maxWidth="lg">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Contact Information */}
          <div className="w-full md:w-5/12">
            <Paper elevation={0} sx={{ p: 4, height: '100%', bgcolor: 'transparent' }}>
              <Typography variant="h4" component="h2" gutterBottom fontWeight="bold" sx={{ color: '#2e7d32' }}>
                Get in Touch
              </Typography>
              <Typography variant="body1" sx={{ color: '#1b5e20' }} paragraph>
                Feel free to reach out. I'd love to hear from you!
              </Typography>

              <List sx={{ mt: 4 }}>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <EmailIcon sx={{ color: '#2e7d32' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      component="a"
                      href="mailto:mushroom@hive.com"
                      sx={{
                        color: '#1b5e20',
                        textDecoration: 'none',
                        '&:hover': { color: '#2e7d32' }
                      }}
                    >
                      your.email@example.com
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon>
                    <PhoneIcon sx={{ color: '#2e7d32' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="text.primary">
                      (123) 456-7890
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disableGutters>
                  <ListItemIcon>
                    <LocationIcon sx={{ color: '#2e7d32' }} />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="text.primary">
                      Takoradi, Ghana
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Paper>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-7/12">
            <Paper elevation={3} sx={{ p: 4, bgcolor: 'white' }}>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-1">
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </div>
                  <div className="col-span-2">
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </div>
                  <div className="col-span-2">
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </div>

                  {status.message && (
                    <div className="col-span-2">
                      <Alert severity={status.type}>
                        {status.message}
                      </Alert>
                    </div>
                  )}

                  <div className="col-span-2">
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
                      sx={{
                        bgcolor: '#2e7d32',
                        '&:hover': {
                          bgcolor: '#1b5e20'
                        }
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </div>
              </form>
            </Paper>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Contact;
