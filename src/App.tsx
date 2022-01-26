import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./views/register/register";
import Login from "./views/login/login";
import Chats from "./views/chats/chats";
import Contacts from "./views/contacts/contacts";
import Discover from "./views/discover/discover";
import Me from "./views/me/me";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/chats" element={<Chats />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/me" element={<Me />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
