// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Page0 from "./components/Page0";
import Page1 from "./components/Page1"; // Page1.js로부터 컴포넌트를 import
import Page2 from "./components/Page2"; // Page2.js로부터 컴포넌트를 import
import Page3 from "./components/Page3"; // Page3.js로부터 컴포넌트를 import
import Page0_start from "./components/Page0_start";
import Page1_start from "./components/Page1_start";
import Page1_2 from "./components/Page1/Page1_2";
import Page1_3 from "./components/Page1/Page1_3";
import Page1_result from "./components/Page1/Page1_result";
import Page2_result from "./components/Page2_result";
import Page3_word from "./components/Page3_word";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Main />} />
        <Route path="/page0" element={<Page0 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page0_start" element={<Page0_start />} />
        <Route path="/page1_start" element={<Page1_start />} />
        <Route path="/page1_2" element={<Page1_2 />} />
        <Route path="/page1_3" element={<Page1_3 />} />
        <Route path="/page1_result" element={<Page1_result />} />
        <Route path="/page2_result" element={<Page2_result />} />
        <Route path="/page3_word" element={<Page3_word />} />
        <Route path="/page3_word/:id" element={<Page3_word />} />
      </Routes>
    </Router>
  );
};

export default App;
