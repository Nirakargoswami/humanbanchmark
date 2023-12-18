import React, { useState, useEffect } from "react";
import { Mainwraper } from "../inexpage/index"
import "./Chimptest.css"
import { Tryagin, Savebutton } from "../Button/Button"
import { Chimptest } from "../../redux/actions/gamescore"
import { useDispatch } from 'react-redux';
import { Savedata } from "../../Firebse/firebse"
import Alertmessge from "../Diloaugbox/Dialoubox"
import GridOnIcon from '@mui/icons-material/GridOn';


const ChimpTest = () => {
    const [start, setStart] = useState(true)
    const [tilePositions, setTilePositions] = useState([]);

    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
    });

    const areaHeight = 500;
    const tileWidth = 50;
    const tileHeight = 50;


    useEffect(() => {
        const generateRandomPosition = () => {
            const x = Math.floor(Math.random() * ((windowDimensions.width - 50) - tileWidth));
            const y = Math.floor(Math.random() * (areaHeight - tileHeight));
            return { x, y };
          };
      

        const checkOverlap = (newTile,positionss) => {
            return positionss.every(
              (existingTile) =>
                newTile.x + tileWidth < existingTile.x ||
                newTile.x > existingTile.x + tileWidth ||
                newTile.y + tileHeight < existingTile.y ||
                newTile.y > existingTile.y + tileHeight
            );
          };

        const generateTilePositions = () => {
            const positions = [];
      
            for (let i = 0; i < 5; i++) {
              let newTile;
              let overlapAttempts = 0;
      
              do {
                newTile = generateRandomPosition();
                overlapAttempts++;
      
                // If it's taking too many attempts to find a non-overlapping position, break the loop
                if (overlapAttempts > 100) {
                  console.error("Could not find non-overlapping positions for all tiles.");
                  break;
                }
              } while (!checkOverlap(newTile,positions));
      
              positions.push(newTile);
            }
      
            setTilePositions(positions);
          };
        generateTilePositions();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,

            });
        };
        // Set up an event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(windowDimensions)

const  check = () => {
    
}




    return (

        <div>
            {start &&
                <Mainwraper setStart={setStart} Img={<GridOnIcon />} linktext={"Start"} Text={"Chimptest "} Header={"Chimptest Memory Test"} />
            }

            <div>
                
                 {!start &&
                    <div
                        style={{ backgroundColor: "rgb(43, 135, 209)" }}
                        className='Mainbox'>

                        {tilePositions && tilePositions.map((position, index) => (
                            <div
                            style={{
                                position: 'absolute',
                                left: position.x,
                                top: position.y,
                            }}
                                key={index}
                                className="css-19b5rdt"
                               
                            >
                               <div onClick={() => check(index + 1)} className="SmallCube">
                               {index + 1}
                               </div>
                                {/*  */}
                            </div>
                        ))}
                    </div>


                }
            </div>
        </div>
    )
}

export default ChimpTest