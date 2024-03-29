import {
    REACTION_TIME_RANK
} from "../actions/types";




const initialState = {

}



const RankingDashbord = (state = initialState, action) => {

    const { type } = action;
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
            }else if(name === "visualmemory"){
                Newgamename = "Visual Memory"
            }else if( name === "wordmemory"){
                Newgamename = "Wordmemory"
            }

        
            let sortedArray 
            if(name == "reactiontime"){
               const   sortedNewarry  = action.payload.data.DataArrry.sort((a, b) => a[name].score
                 - b[name].score
                 );
                 sortedArray =  sortedNewarry.filter((x) => {
                   
                    if(  Number(x.numbermemory.score) !== 0){
                        console.log(x.numbermemory.score)
                        return x 
                    }
                 } )

            }else{
                 sortedArray = action.payload.data.DataArrry.sort((a, b) => b[name].score
                 - a[name].score
                 );

            }


            const resultArray = sortedArray.map((userData, y) => ({
                name: userData.name,
                score: userData[name].score,
                Rank: y,
                coin:userData[name].coin,
                date:action.payload.data.date,
                gamename: Newgamename
            }));
            
            return {
                ...state,
                resultArray
            };



        default:
            return { ...state };
    }
}

export default RankingDashbord;



