import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./components/SIgnUpForm";
import Header from "./components/Header";
import SumNumbers from "./components/SumNumbers";
import TaskScreen from "./components/TaskScreen";
import CounterComponent from "./components/CounterComponent";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<h1>This is on Home Page</h1>} />
          <Route path={"/contact"} element={<h1>This is on Contact Page</h1>} />
          <Route path={"/about"} element={<h1>This is on About Page</h1>} />
          <Route path={"/signup"} element={<SignUpForm />}>
            <Route path={"sum"} element={<SumNumbers />} />
          </Route>
          <Route path={"/tasks"} element={<TaskScreen />} />
          <Route path={"/counter"} element={<CounterComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
