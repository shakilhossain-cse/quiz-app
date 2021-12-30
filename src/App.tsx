import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./pages/Loading";

const Home = lazy(() => import("./pages/Home"));
const Exam = lazy(() => import("./pages/Exam"));
const Result = lazy(() => import("./pages/Result"));
const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HTMLOptionElement />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
   </Suspense>
    </div>
  );
};

export default App;
