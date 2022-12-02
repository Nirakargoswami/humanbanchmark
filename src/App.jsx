import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route, Link, Form } from 'react-router-dom';
import From from "./components/form"
import { useSelector, useDispatch } from 'react-redux'
import Table from "./table"

function App() {
    const [rows, setRows] = useState("")
    const [headCells, setHeadCells] = useState("")
    const state = useSelector((state) => state)



    useEffect(() => {
        setRows(state.productdata.rows)
        setHeadCells(state.productdata.headCells)
    }, [state])
    const dispatch = useDispatch()
    console.log(state)




    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "80px",marginBottom:"70px" }}>
                { }



                <Routes>
                    <Route path='/' element={rows && headCells && <Table headCells={headCells} rows={rows && rows} />
                    } />
                    <Route path='/form' element={<From />} />
                </Routes>

            </div>



        </>
    );
}

export default App;
