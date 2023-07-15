import React, { useEffect, useState } from "react"
import Flagedata from "../Data/flagedata"
import randomIntFromInterval from "../Lib/lib"
import AppsIcon from '@mui/icons-material/Apps';
import "./GuessFlage.css"
import { Mainwraper } from "../../components/inexpage/index"
import { Custombutton } from "../Button/Button"
const GuessFlage = () => {
  const [flage, setflage] = useState(0)
  const [life, setlife] = useState(3)
  const [Start, setStart] = useState(true)
  const [flagedata, setflagedata] = useState([])
  const [value, setvalue] = useState(0)
  const [id, setid] = useState()
  const [Gmestart, setGmestart] = useState(true)
  const [stopgame, setstopgame] = useState("")
  const [right, setright] = useState()
  const [ansvlaue, setansvlaue] = useState("")
  const [level, setlevel] = useState(1)
  const [Quizestart, setQuizestart] = useState(false)
  const [Timeid, setTimeid] = useState("")
  var varCounter = 0;


  var varName = function () {

    if (value < 4) {
      setvalue(value => value + 1)
      /* your code goes here */
    }
  };

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  function getRandom5(arr) {
    // Get a random start index between 0 and the length of the array minus 5
    const startIndex = Math.floor(Math.random() * (arr.length - 5));
    // Get the 5 items starting from the random index
    const Data = arr.slice(startIndex, startIndex + 5);

    if (Data.length < 5) {
      const Newdata = shuffleArray(Flagedata)
      getRandom5(Newdata)
    } else {
      return Data
    }

  }


  useEffect(() => {
    const Newarydeta = []
    flage && flage.map((x) => {
      const url = 'https://restcountries.com/v3.1/name/' + x
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            const obj = {
              flage: "",
              name: ""
            }


            const Data = result[0]
            obj.flage = Data.flags.png
            obj.name = Data.name.common

            Newarydeta.push(obj)
            if (Newarydeta.length == 5) {
              setflagedata(Newarydeta)

            }
            //  setflage(Newarydeta)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    })
  }, [flage])

  useEffect(() => {
    clearInterval(Timeid);
    if (!Gmestart) {

      const intervalId = setInterval(varName, 2000)
      setid(intervalId)
    }
  }, [Gmestart])





  useEffect(() => {

    setflagedata([])

    const data = getRandom5(Flagedata)
    if (data.length < 5) {
      const data = getRandom5(Flagedata)
    } else {
      setflage(data)
    }




  }, [])


  useEffect(() => {
    if (flage) {
      if (value > 3) {
        const No = randomIntFromInterval(0, 5)
        clearInterval(id)
        setTimeout(() => {
          const ans = flagedata[No]
          setstopgame(ans)
        }, 2000);



      } else {
        Flagemachine()
      }
    }

  }, [value])


  const Flagemachine = () => {
    return (
      <div className="Flagebox" >

        <img className="Image" src={`${flagedata[value].flage}`} />
        <div>{`${flagedata[value].name}`}</div>
      </div>
    )
  }

  const ans = (x, y) => {
    if (x == stopgame.name) {
      setansvlaue(y)
      setlevel(level + 1)
      const Time = setInterval(() => {
        const data = getRandom5(Flagedata)
        if (data.length < 5) {
          const data = getRandom5(Flagedata)
        } else {
          setflage(data)
        }
        setGmestart(true)
        setQuizestart(false)
        setstopgame(false)
        setvalue(0)
        setansvlaue("")

      }, 2000);

      setTimeid(Time)


    } else {
      setlife(life - 1)
      // setvalue("")
      setansvlaue(6)
      // setQuizestart(false)
    }

  }

  useEffect(() => {
    if (ansvlaue) {
      Clases()
    }

  }, [ansvlaue])


  const Clases = () => {
    return (flagedata.map((x, y) => {
      return (<>

        <div style={{ border: ansvlaue == y && Quizestart ? "2px solid green" : Quizestart && ansvlaue !== y ? "2px solid red" : "2px solid black" }} onClick={() => ((ans(x.name, y)), setQuizestart(true))} className="Question btn">

          {x.name}
        </div>
      </>)

    }))
  }

  return (
    <div className="Quezmianbox">
      {

        <div className="NextLEve"
        >
          <div style={{ display: "flex" }}>
            <span style={{fontSize:"40px"}}>Life</span>
            <span style={{fontSize:"40px",marginLeft:"20px"}} >{life}</span>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{ display: "flex" }}>Level</span>
            <span style={{fontSize:"40px",marginLeft:"20px"}}>{level}</span>
          </div>
        </div>

      }

      {
        !Start && Gmestart && !stopgame &&

        <div >

          <button className="Next" onClick={() => setGmestart(false)}>
            Next Level
          </button>
        </div>
      }
      {Start &&
        <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Visual  Memory Test"} />
      }

      {!Start && !Gmestart && stopgame &&

        <div className="Flagebox">
          <img className="Image" src={`${stopgame.flage}`} />

        </div>

      }

      {
        !Start && !Gmestart && stopgame &&
        <div className="Questionbox">
          <Clases />
        </div>
      }

      {
        !Start && !Gmestart && !stopgame &&
        <Flagemachine />
      }
    </div>
  )
}




export default GuessFlage
