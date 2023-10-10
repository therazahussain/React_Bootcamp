import './App.css';
import News from './components/News.js';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default function App() {

  const[progress,setProgress] = useState(0);

    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="home" pageSize="18" country="in" category="" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize="18" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize="18" country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize="18" country="in" category="health" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize="18" country="in" category="sports" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize="18" country="in" category="science" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize="18" country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }