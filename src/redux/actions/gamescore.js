import { REACTION_TIME,SEQUENCE,NUMBER_MEMORY,VERBAL_MEMORY,VISUAL_MEMORY,
    SCORE_DATA,
    CHIMP_TEST,
    REACTION_TIME_RANK
} from "./types";



const  Reactiontimescore = (score) => (
    {
    type: REACTION_TIME,
    payload: score,
})

const  Scoredata = (score) => (
    {
    type: SCORE_DATA,
    payload: score,
})
const  SeauenceScore = (score) => (
    {
    type: SEQUENCE,
    payload: score,
})
const  Chimptest = (score) => (
    {
    type: CHIMP_TEST,
    payload: score,
})
const  Numbermemoryscore = (score) => (
    {
    type: NUMBER_MEMORY,
    payload: score,
})

const  Verbalmemory = (score) => (
    {
    type: VERBAL_MEMORY,
    payload: score,
})

const  Visulamemory = (score) => (
    {
    type: VISUAL_MEMORY,
    payload: score,
})

const Reactiotimerandk  = (gamename) => (
 
    {
        type : REACTION_TIME_RANK,
        payload:gamename
    }   
)

export  {Reactiotimerandk,Scoredata,Reactiontimescore,SeauenceScore,Numbermemoryscore,Verbalmemory,Visulamemory,Chimptest}