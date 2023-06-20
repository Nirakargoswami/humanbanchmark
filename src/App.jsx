import React, {  useEffect } from "react";
import Reactiontime from "./components/Retiontime /reactiontime";
import {
  Routes,
  Route,

} from "react-router-dom";
import Dashborad from "./components/DashBoard/DashBoard";

import {  useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import WordTriel from "./components/WordsTriel/WordsTriel";
import SequenceMemoryTest from "./components/SequenceMemoryTest/SequenceMemoryTest";
import Visualmemory from "./components/visualmemory/visualmemory";
import Numbermemory from "./components/Numbermemory/Numbermemory";
import Login from "./components/login/Login";
import Gameleaderbord from "./components/Gamebord/GameLeaderbord"
import Signup from "./components/signup/Signup";
import Wordmemery from "./components/Wordmemmory/Wordmemory";
import { Getallscore } from "../src/Firebse/firebse";
import { Scoredata } from "../src/redux/actions/gamescore";
import { Firstscreen } from "./components/firstscreen/firstScrenn";
function App() {
  const dipatch = useDispatch();




  const getdata = async () => {
    const userid = JSON.parse(localStorage.getItem("user"));
    if (userid) {
      const data = Getallscore(userid.uid);
      data
        .then((responce) => {
         
          dipatch(Scoredata(responce));
        })
        .catch(() => {});
      if (data) {
      }
    }
  };

  useEffect(() => {
    getdata();
  },[ ]);

  return (
    <>
      <Navbar />
      <div className="Maionpage">
        <div className="secondwraper"></div>
        <Routes>
          <Route path="/" element={<Firstscreen />} />

          <Route path="/reactiontime" element={<Reactiontime />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/wordmemomry" element={<WordTriel />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashborad />} />

          <Route path="/sequence" element={<SequenceMemoryTest />} />
          <Route path="/number-memory" element={<Numbermemory />} />
          <Route path="/verbal-memory" element={<Wordmemery />} />
          <Route path="/memory" element={<Visualmemory />} />
          <Route path="/gameleadorbord" element={<Gameleaderbord />} />

          <Route path="/Numbermemory" element={<Numbermemory />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
