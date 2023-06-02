

import React, { useState, useEffect, useRef } from 'react'
import "./WordsTriel.css"


const WordsTriel = () => {
    const [Arry, setArry] = useState([])
    const [count, setCount] = useState(0)
    const [word, setword] = useState("acces")
    const [inputword, setInputword] = useState("")
  const[no,setNocount] = useState(0)
  const[start,setStart] = useState(false)
    const [value, setvalue] = useState()
    const [uspdate,setUpdate] = useState(0)
    const inputElement = useRef(null);
    const cuberef = useRef(null)

    const Name = [
        "aardvark",
        "abacus",
        "abbey",
        "abdomen",
        "ability",
        "abnormality",
        "abolishment",
        "abortion",
        "abrogation",
        "absence",
        "abundance",
        "abuse",
        "academics",
        "academy",
        "accelerant",
        "accelerator",
        "accent",
        "acceptance",
        "access",
        "accessory",
        "accident",
        "accompanist",
        "accord",
        "accordance",
        "accordion",
        "account",
        "accountant",
        "accounting",
        "accuracy",
        "accusation",

    ]



    const Cubeclick = (value) => {
        if(!start){
            //bcs on every click it should no need to chek the tru of false it can easyly pass the funcnction 
    
            setStart(true)
        }
        if(no > 4){
            setNocount(0)
        }
        // setvalue(prevState => (
        //     prevState = "",
        //      value
        //     ))
        setvalue(value)
        setUpdate(uspdate + 1)
}

    useEffect(() => {
        
        // if (inputword.length > 5) {
        //     setInputword("")
        //     setInputword(inputword + value)
            
        // } else {
        //     setInputword(inputword + value)
          
        // }
        if (count == 0 && start) {
            console.log("start")
            Arry.map((x) => {
                if (x.no === count) {
                    const Exist = word.includes(value)
             if (Exist){
                const indexOfFirst = word.indexOf(value)
                const indexOfSec = inputword.indexOf(value)
                const Check = indexOfFirst === no
                if(Check){
                    x.value = value
                    x.backgroundColor = "green"
                    setCount(count + 1)
                }else{
                    x.value = value
                    x.backgroundColor = "yellow"
                    setCount(count + 1)
                }
             }else{
                x.value = value
                
                setCount(count + 1)
             }
                   
                }
            })
            Makeacube()
            setNocount(no + 1)
        } else if(start) {
            Arry.map((x) => {
                if (x.no === count) {
                    const Exist = word.includes(value)
             if (Exist){
                const indexOfFirst = word.indexOf(value)
                const indexOfSec = inputword.indexOf(value)
                const Check = indexOfFirst === no
                
                if(Check){
                    x.value = value
                    x.backgroundColor = "green"
                    setCount(count + 1)
                }else{
                    x.value = value
                    x.backgroundColor = "yellow"
                    setCount(count + 1)
                }
             }else{
                x.value = value
                
                setCount(count + 1)
             }
                   
                }
            })
            setNocount(no + 1)

            Makeacube()
        }
       
       
       
        
    }, [uspdate])


    const keyboard = [
        "q w e r t y u i o p",
        "a s d f g h j k l",
        "Backspace z x c v b n m Enter"
    ]
    const No = Array.from(Array(30).keys())
    const MinArry = []
    const MinwordArry = []
    const Makearryofobj = () => {
        for (let i = 0; i < 30; i++) {
            MinArry.push({
                value: "",
                no: i,
                backgroundColor: "",

            })
        }
    }
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    // frist render
    useEffect(() => {
        Makearryofobj()
        setArry(MinArry)
        Name.map((x) => {
            if (x.length === 5) {
                MinwordArry.push(x)
            }


        })

        const wordNo = randomIntFromInterval(0, MinwordArry.length - 1)
        setword(MinwordArry[wordNo])
        setCount(0)
    }, [])

    const Makeacube = () =>

        Arry.map(({ no, value, backgroundColor }) => {

            return (<div ref={cuberef} key={no} style={{ backgroundColor: backgroundColor ? `${backgroundColor}` : "white" }} className='cube'>
                <span  >{value}</span>
            </div>)
        })



    const Backspace = () => {
        console.log(count)
        Arry.map((x) => {
            if (x.no === count - 1) {
                x.value = ""
                setCount(count - 1)
            }
        })
        Makeacube()
    }
    const Enter = (y) => {

    }


    return (
        <>
            <div className='Cubename'>
                <div>
                    {word}
                </div>
                <div className='Cubesec'>


                    {<Makeacube />}

                </div>
                <div style={{ marginTop: "20px" }}>
                    {
                        keyboard.map((x) =>
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                {
                                    x.split(" ").map(y =>
                                        <div ref={inputElement} onClick={() => y == "Backspace" ? Backspace(y) : Cubeclick(y)} className='Game-keyboard-button'>{y}</div>

                                    )
                                }

                            </div>
                        )
                    }
                </div>
            </div>

        </>

    )
}

export default WordsTriel;