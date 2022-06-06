import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {
  Home,
  Projects,
  Flashcard
} from "./pages/index.js"

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/projects" exact element={<Projects />} />
      <Route path="/flashcard" exact element={<Flashcard />} />
      <Route path="*" component={() => <h2 style={{color: "white"}}>Error 404 - Page Not Found</h2>} />
    </Routes>
  </Router>
);

export default App;
