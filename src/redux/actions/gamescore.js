import { REACTION_TIME,SEQUENCE,NUMBER_MEMORY,VERBAL_MEMORY,VISUAL_MEMORY,
    SCORE_DATA,
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

export  {Scoredata,Reactiontimescore,SeauenceScore,Numbermemoryscore,Verbalmemory,Visulamemory}