import React, { useState, useEffect, useRef } from "react";
import Reactiontime from "./components/Retiontime /reactiontime";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Form,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import WordTriel from "./components/WordsTriel/WordsTriel";
import SequenceMemoryTest from "./components/SequenceMemoryTest/SequenceMemoryTest";
import Visualmemory from "./components/visualmemory/visualmemory";
import Numbermemory from "./components/Numbermemory/Numbermemory";
import MathGame from "./components/mathgaem/mathgaem";
import GuessFlage from "./components/GuessFlage/GuessFlage";
import Dashborad from "./components/DashBoard/DashBoard"
import Login from "./components/login/Login"
import Signup from "./components/signup/Signup"
import { Firstscreen } from "./components/firstscreen/firstScrenn";
function App() {
  const [rows, setRows] = useState("");
  const [headCells, setHeadCells] = useState("");
  const [shwonaimation, setAnmation] = useState(false);
  const childCompRef = useRef();
  const state = useSelector((state) => state);

  const stopdoanimation = () => {
    setAnmation(!shwonaimation);
  };

  useEffect(() => {
    setRows(state.productdata.rows);
    setHeadCells(state.productdata.headCells);
  }, [state]);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div className="Maionpage">
        <div className="secondwraper">
          
        </div>
        <Routes>
        <Route path="/" element={<Firstscreen />} />

          <Route path="/reactiontime" element={<Reactiontime />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashborad/>} />

          <Route path="/sequence" element={<SequenceMemoryTest />} />
          <Route path="/number-memory" element={<Numbermemory />} />
          <Route path="/verbal-memory" element={<WordTriel />} />
          <Route path="/memory" element={<Visualmemory />} />
          <Route path="/Numbermemory" element={<Numbermemory />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
