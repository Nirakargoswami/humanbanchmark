import React, { useEffect, useState } from "react"
import Flagedata from "../Data/flagedata"
import randomIntFromInterval from "../Lib/lib"
import AppsIcon from '@mui/icons-material/Apps';
import "./GuessFlage.css"
import { Mainwraper } from "../../components/inexpage/index"
import {Custombutton} from "../Button/Button"
const GuessFlage = () => {
    const [flage, setflage] = useState(0)
    const [Start, setStart] = useState(true)
    const [flagedata,setflagedata] = useState([])
    const [value,setvalue] = useState(0)
    const [id,setid] = useState()
    const [Gmestart,setGmestart] = useState(true)
    const [stopgame,setstopgame] = useState("")
    const [right,setright] = useState()
    const [ansvlaue,setansvlaue] = useState("")
    var varCounter = 0;


    var varName = function(){

         if(value < 4) {
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
        flage &&  flage.map((x) => {
            console.log("flage")
            console.log(x)
            const url = 'https://restcountries.com/v3.1/name/'+x
           fetch(url)
            .then(res => res.json())
            .then(
              (result) => {
                const obj = {
                    flage : "",
                    name : ""
                }
                const Data= result[0]
                obj.flage = Data.flags.png
                obj.name= Data.name.common

                flagedata.push(obj)
                

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
    },[flage])

 useEffect(() => {
if(!Gmestart){

  const   intervalId = setInterval(varName, 2000)
    setid(intervalId)
}
 },[Gmestart])
    




    useEffect(() => {
        
        setflagedata([])
            const data = getRandom5(Flagedata)
            setflage(data)
            
        

    }, [])


    useEffect(() => {
       if(flage){
        console.log(value)
        if(value > 3){

          const No =   randomIntFromInterval(0,5)
           clearInterval(id)
           const ans = flagedata[No]
           setstopgame(ans)
           setGmestart(false)

           
        }else{
         Flagemachine()
        }
       }
       
    },[value])


const Flagemachine = () => {
    console.log("value")
 
    console.log(value)
    return(
<div className="Flagebox" >

<img className="Image" src={`${flagedata[value].flage}`} />
<div>{`${flagedata[value ].name}`}</div>
</div>
    )
}

const ans = (x,y) => {
    console.log(x)
    console.log(ansvlaue)
  if(x == stopgame.name ){
    setansvlaue(y)
    console.log(x == stopgame.name )
    const data = getRandom5(Flagedata)
    // setflage(data)
  }else{
    //   setvalue("")

  }

}
useEffect(() => {

},[ansvlaue])

console.log(flagedata)

    return (
        <div>
            
         {
                 !Start && Gmestart && !stopgame &&
                 <div>
                 <div>ok</div>
                 <button onClick={() => setGmestart(!Gmestart)}>
                    ok
                 </button>
                 </div>
              }
         {Start &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Visual  Memory Test"} />
            }
            {
                !Start &&  !Gmestart &&  stopgame && 
                
                flagedata.map((x,y) => {
                  console.log((ansvlaue === false))
                    return (
                        <div style={{border: ansvlaue ? "2px solid black" :  ansvlaue == y ? "2px solid yellow" :  "2px solid red"  }} onClick={() => (ans(x.name,y))} className="Question">

                            {x.name}
                        </div>
                    )
                })
            }
              
            {
              !Start &&  !Gmestart && !stopgame &&
              <Flagemachine/>
            }
        </div>
    )
}




export default GuessFlage
