import {
  SEQUENCE,
  NUMBER_MEMORY,
  VISUAL_MEMORY,
  REACTION_TIME,
  SCORE_DATA
} from "../actions/types";
import { Savedata } from "../../Firebse/firebse"




const initialState = {
  dashboad: {
    numbermemory: "",
    sequencememory: "",
    visualmemory: "",
    reactiontime: "",
    // verbalmemory: "",
  },
}



export default function (state = initialState, action) {

  const userid = JSON.parse(localStorage.getItem("user"))
  const { type, payload } = action;
  switch (type) {
    case SEQUENCE:
      return {
        ...state,
        sequencememory: payload,

      };
    case NUMBER_MEMORY:
      return {
        ...state,
        numbermemory: payload,
      };
    case SCORE_DATA:
      state.visualmemory = payload.visualmemory.score + " points"
      state.reactiontime = payload.reactiontime.score + " mls"
      state.numbermemory = payload.numbermemory.score + " points"
      state.sequencememory = payload.sequencememory.score + " points"
      state.name = payload.name
      return {
        ...state,
      }
      
        ;
   
      case VISUAL_MEMORY:
      return {
        ...state,
        visualmemory: payload,

      };
    case REACTION_TIME:
      return {
        ...state,
        reactiontime: payload + "mls",

      };



    default:
      return { ...state.dashboad, };
  }
}





