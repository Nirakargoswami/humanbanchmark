import React, { useEffect, useState } from "react";
import { Mainwraper } from "../inexpage/index"
import AppsIcon from '@mui/icons-material/Apps';
import { Tryagin, Savebutton } from "../Button/Button"
import { useDispatch } from "react-redux";
import { Verbalmemory } from "../../redux/actions/gamescore"
import "./Wordmemory.css"
const Wordmemery = () => {
    const [checkword, setcheckword] = useState([])
    const [score, setscore] = useState(0)
    const [lives, setlives] = useState(5)
    const [start, setStart] = useState(true)
    const [word, setword] = useState()
    const dispatch = useDispatch()

    const Name = [


    ]

    const newword = async() => {
        const Rendno = randomIntFromInterval(0, Name.length - 1)
        const url = 'https://random-words5.p.rapidapi.com/getMultipleRandom?count=1';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e61b2de358msh99ba90c9508cc7dp1d3015jsn262edc08d8e1',
                'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            setword(result)
          
        } catch (error) {
        }
    }

const firstwordarry = () => {
    for(let i = 0 ; i<6;i++){
        newword()
    }
}

useEffect(() => {
    firstwordarry()
},[])
    useEffect(
        () => {
        if (!start) {
            const Rendno = randomIntFromInterval(0, Name.length - 1)
            setword(Name[Rendno])
            
        }
        
    }, [start])

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const Newword = () => {
        const Rendno = randomIntFromInterval(0, Name.length - 1)
        const Newword = Name[Rendno]
        if (checkword.length === 0) {
            setscore(score + 1)
        } else if (checkword.indexOf(word) === -1) {
            setscore(score + 1)
        }
        else {
            setlives(lives - 1)

        }
        setword(Newword)
        newword()
        setcheckword(prevState => [...prevState, word]);

    }



    const Seenword = () => {
        const Rendno = randomIntFromInterval(0, Name.length - 1)
        const Newword = Name[Rendno]
      
        if (checkword.length === 0) {
            setlives(lives - 1)
        } else if (checkword.indexOf(word) !== -1) {
            setscore(score + 1)
        }
        else {
            setlives(lives - 1)

        }
        setword(Newword)
        newword()
        setcheckword(prevState => [...prevState, word]);
    }

    useEffect(() => {
        if (lives === 0) {
            setword(false)

        }
    }, [lives])
    const Tryagain = () => {
        setscore(0)
        setlives(3)
        setword("")
        setcheckword([])
        setStart(true)
    }
    const SavebuttonScore = () => {
        dispatch(Verbalmemory(score))
    }
    return (
        <div>
            {start &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"You will be shown words, one at a time. If you've seen a word during the test, click SEEN If it's a new word, click NEW"} Header={"Verbal Memory Test"} />
            }
            {
                word &&

                <div className="column Mainbox color">
                    <div className="Wrodwraper" >
                        <div style={{ color: "white", marginRight: "20px", fontSize: "26px" }} >Score | {score} </div>
                        <div style={{ color: "white" }} > </div>

                        <div style={{ color: "white", fontSize: "26px" }}>Lives | {lives}</div>

                    </div>
                    <div >
                        <h1 style={{ color: "white" }}>{word}</h1>
                    </div>

                    <div style={{ display: "flex" }}>
                        <button className="css-de05nr" style={{ marginRight: "25px" }} onClick={() => Newword()}>New</button>
                        <button className="css-de05nr" onClick={() => Seenword()}>Seen</button>

                    </div>
                </div>

            }{
                !word && !start &&
                <><div
                    style={{ backgroundColor: "rgb(43, 135, 209)" }}
                    className='Mainbox' >
                    <div className='Secondbox'>

                        <AppsIcon className='Icon' />
                        <div className='textbox'>
                            <span className='SecLevel'>
                                <span className='TEXt'>Score</span>
                                <span style={{ fontSize: "27px" }} >{score}</span>
                            </span>
                            <div className='textfirst'>
                                Verbal Memory
                            </div>

                        </div>

                        <div className='textbox '>

                            <p className='Discription'>
                                Save your score to see how you compare
                            </p>

                            <div className='
                        Flex'>

                                <Tryagin Tryagin={Tryagain} />
                                <Savebutton Score={SavebuttonScore} />

                            </div>

                        </div>
                    </div>

                </div>

                </>
            }
            <div className="Abouttest">

                <h1 style={{ textAlign: "start" }}>About the test</h1>
                <p style={{ textAlign: "start" }}>This test measures how many words you can keep in short term memory at once.</p>
                <p style={{ textAlign: "start" }}>The number of words you need to remember grows continually, until you can't keep them in your head anymore.</p>
                <p style={{ textAlign: "start" }}>Go as long as you can. You have 3 strikes until game over.</p>
                <p style={{ textAlign: "start" }}>Your score is how many turns you lasted.</p>

            </div>
        </div>
    )
}

export default Wordmemery