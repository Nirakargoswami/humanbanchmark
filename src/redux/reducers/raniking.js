import {
    REACTION_TIME_RANK
} from "../actions/types";
import { Getrankdata } from "../../Firebse/firebse"




const initialState = {

}



const RankingDashbord = (state = initialState, action) => {


    const { type, payload } = action;
    console.log(payload, type)

    switch (type) {
        case REACTION_TIME_RANK:
            const name = action.payload.gamename
            let Newgamename 
            if(name === "numbermemory"){
                Newgamename = "Number Memory"
            }else if(name === "reactiontime"){
                Newgamename = "Reaction Time"
            }else if(name === "sequencememory"){
                Newgamename = "Sequence Memory"
            }else if(name == "verbalmemory" ){
                Newgamename = "Verbal Memory"
            }else if(name == "visualmemory"){
                Newgamename = "Visual Memory"
            }else if( name == "wordmemory"){
                Newgamename = "Wordmemory"
            }

            
            let sortedArray 
            if(name == "reactiontime"){
                 sortedArray = action.payload.data.sort((a, b) => b[name] + a[name]);

            }else{
                 sortedArray = action.payload.data.sort((a, b) => b[name] - a[name]);

            }
            console.log(sortedArray)
            const resultArray = sortedArray.map((userData, y) => ({
                name: userData.name,
                score: userData[name],
                Rank: y,
                gamename: Newgamename
            }));
            
            console.log(resultArray, "fasdfafa")
            return {
                ...state,
                resultArray
            };



        default:
            return { ...state };
    }
}

export default RankingDashbord;



