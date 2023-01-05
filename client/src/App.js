import React from "react";
import { Container } from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Auth from "./components/Auth/Auth.js";
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  return (
  <GoogleOAuthProvider clientId="802684355845-hbo1j2gf71s2jrqdq7hh0ql2d8b45a01.apps.googleusercontent.com">
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/auth' exact element={<Auth />} />
          </Routes>
      </Container>
    </BrowserRouter>
  </GoogleOAuthProvider>
  )
}

export default App;