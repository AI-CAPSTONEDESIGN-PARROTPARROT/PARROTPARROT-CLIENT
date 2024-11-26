import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WordList from "./pages/WordList";
import LearningStatistics from "./pages/LearningStatistics";
import Success from "./components/DetailWord/Success";
import Character from "./pages/Character";
import DetailWord from "./pages/DetailWord";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wordList" element={<WordList />} />
      <Route path="/statistics" element={<LearningStatistics />} />{" "}
      <Route path="/character" element={<Character />} />
      <Route path="/detailword" element={<DetailWord />} />
      {/* <Route path="/success" element={<Success />} /> */}
    </Routes>
  );
};

export default Router;
