import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Quizdaat } from "../Constatant/constatn"
import { Quizdata } from "../Constatant/constatn"

const Gamepage = () => {
    const [data, setdata] = useState(null)
    const [gaemdata, stGamaedata] = useState()
    const params = useParams();
    const id = params.id;


    useState(() => {
      
        if (id) {
            stGamaedata(Quizdata[id - 1])
            const Getdata = Quizdaat[id]

            setdata(Getdata)

        }
    }, [])
  
    
    
    const checkans = (x, Z) => {

        const Gamedata = [...data]
        Gamedata[Z]["click"] = "Clicked"
        setdata(Gamedata)
        // console.log(Gamedata)
    }
    // console.log(id, data, gaemdata)

    useEffect(() => {
        Return()
    }, [data])

    const Return = () => {
        return (
            data &&

            data.map((D, Z) => {
                return (
                    <>
                        <div className="Questionsection">
                            <h2>
                                {D.Question}
                            </h2>
                           { D.Audios && <div style={{ textAlign: "center" }}>
                                <audio controls>
                                    <source src={D.Audios} type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>}
                            <div>
                                {D.option.map((x) => {
                                    return (
                                        <button  style={
                                            { borderColor: `${(D.click === "Clicked") && (x == D.
                                            ans
                                            ) ? "Green"  : (D.click === "Clicked") && (x !== D.ans) ? "red" : "#D269E6"}` }} onClick={() => checkans(D.ans, Z)
                                            
                                            }>
                                            {x}
                                        </button>

                                    )
                                })


                                }
                            </div>
                            { (D.click == "Clicked") &&
                                <div className="Truans">
                                    <h3 style={{margin:"0px"}}>
                                    The correct Answer
                                    </h3>
                                    <h2 style={{margin:"0px"}}>
                                     
                                    {D.ans}
                                    </h2>
                            
                                </div>}
                        </div>


                    </>
                )
            })


        )
    }
    return <>
        <div>
            <div className="New">
                {gaemdata &&
                    <>

                        <p>
                            part {id} :{gaemdata.slang}
                        </p>
                        <div className="New">
                            {gaemdata.Poster}
                        </div>

                    </>

                }
            </div>
          {  Return()}

        </div>

    </>
}

export default Gamepage;
