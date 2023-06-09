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
            const sortedArray = action.payload.data.sort((a, b) => b[name] - a[name]);
            console.log(sortedArray)
            const resultArray = sortedArray.map((userData, y) => ({
                name: userData.name,
                score: userData[name],
                Rank: y
            }));
            console.log(resultArray)
            return {
                ...state,
                resultArray
            };



        default:
            return { ...state };
    }
}

export default RankingDashbord;



