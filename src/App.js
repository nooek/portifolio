import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {
  // Home,
  // AboutMe,
  Projects,
  Flashcard,
  GamesMarket,
  TalkingApp
} from "./pages/index.js"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Projects />} />
      {/* <Route path="/aboutme" exact element={<AboutMe />} /> */}
      {/* <Route path="/projects" exact element={<Projects />} /> */}
      <Route path="/gamesmarket" exact element={<GamesMarket/ >} />
      <Route path="/flashcard" exact element={<Flashcard />} />
      <Route path="/talkingapp" exact element={<TalkingApp />} />
      <Route path="*" element={() => <h2 style={{color: "white"}}>Error 404 - Page Not Found</h2>} />
    </Routes>
  </Router>
);

export default App;
