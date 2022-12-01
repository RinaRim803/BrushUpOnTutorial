import React from "react";
// import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />
          <Route path="/new-meetup" element={<NewMeetup />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
