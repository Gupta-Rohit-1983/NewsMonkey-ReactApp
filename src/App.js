import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import About from './component/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <LoadingBar
          height={3}
          shadow={true}
          color="#0d1a26"
          progress={progress}
        />
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} key="general" />} />
            <Route path="/business" element={<News setProgress={setProgress} key="business" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} key="entertainment" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={setProgress} key="health" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress} key="science" category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress} key="sports" category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress} key="technology" category="technology" />} />
            <Route path="/about" element={<About setProgress={setProgress} key="about" />} />
          </Routes>
        </div>
        <footer className="text-center mt-4">
          <p>&copy; 2023 NewsApp. All rights reserved.</p>
        </footer>
      </Router>
    </>
  );
};

export default App;
