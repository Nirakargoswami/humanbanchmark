import React, { useState, useEffect ,useRef} from 'react'

import { BrowserRouter as Router, Routes, Route, Link, Form } from 'react-router-dom';
import From from "./components/form"
import { useSelector, useDispatch } from 'react-redux'
import Table from "./table"
 import "./App.css"
 import WordTriel from "./components/WordsTriel/WordsTriel"
 import SequenceMemoryTest from "./components/SequenceMemoryTest/SequenceMemoryTest"
function App() {
    const [rows, setRows] = useState("")
    const [headCells, setHeadCells] = useState("")
    const [shwonaimation,setAnmation] = useState(false)
    const childCompRef = useRef()
    const state = useSelector((state) => state)


const stopdoanimation = () => {
    setAnmation(!shwonaimation)
}

    useEffect(() => {
        setRows(state.productdata.rows)
        setHeadCells(state.productdata.headCells)
    }, [state])
    const dispatch = useDispatch()


    return (
        <>

            <div  className="Maionpage">
                <div className="secondwraper">
                    
                <Routes>
                    <Route path='/' element= {<SequenceMemoryTest  />}
                    />
                    {/* <Route path='/form' element={<From />} /> */}
                </Routes>
                </div>

            </div>




            



        </>
    );
}

export default App;
