// import { useState } from 'react'

import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { TestingThings } from "./TestingThings/TestingThings";
import { PageLayout } from "./PageLayout/PageLayout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testingthings" element={<TestingThings />} />
        <Route path="/pagelayout" element={<PageLayout />} />
      </Routes>
    </>
  );
}

export default App;
