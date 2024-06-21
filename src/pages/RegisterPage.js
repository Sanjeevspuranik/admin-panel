import React from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import { AccountCircle, EmailOutlined } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="sm">
      <div style={{ marginTop: 100 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} align="center">
            <AccountCircle style={{ fontSize: 80, color: "#3f51b5" }} />
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="h4">Register</Typography>
          </Grid>
        </Grid>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                id="username"
                name="username"
                label="Username"
                variant="outlined"
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                id="email"
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                id="password"
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} align="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<EmailOutlined />}
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={12} align="center">
              <Typography variant="body2">
                Already have an account?{" "}
                <Link component={RouterLink} to="/login" underline="none">
                  Login here
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;
