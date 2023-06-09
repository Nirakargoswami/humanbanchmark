import {
  PRODUCT_DATA, ADD_ITEM, REMOVE_ITEM,
  SEQUENCE,
  NUMBER_MEMORY,
  VERBAL_MEMORY,
  VISUAL_MEMORY,
  REACTION_TIME,
  SCORE_DATA
} from "../actions/types";
import { Savedata } from "../../Firebse/firebse"
import { Co2Sharp } from "@mui/icons-material";



const initialState = {
  dashboad: {
    reactiontime: "",
    sequencememory: "",
    numbermemory: "",
    visualmemory: "",
    verbalmemory: "",
  },
}



export default function (state = initialState, action) {

  const userid = JSON.parse(localStorage.getItem("user"))
  console.log(state)
  const { type, payload } = action;
  switch (type) {
    case SEQUENCE:
      Savedata(userid.uid, "sequencememory", payload)
      return {
        ...state,
        sequencememory: payload,

      };
    case NUMBER_MEMORY:
      Savedata(userid.uid, "numbermemory", payload)
      return {
        ...state,
        numbermemory: payload,
      };
    case SCORE_DATA:
      state.verbalmemory = payload.verbalmemory  + " points"
      state.visualmemory = payload.visualmemory + " points"
      state.reactiontime = payload.reactiontime + " ml"
      state.numbermemory = payload.numbermemory + " points"
      state.sequencememory = payload.sequencememory + " points"
      state.name = payload.name
      return {
        ...state,
      }
      
        ;
    case VERBAL_MEMORY:

      Savedata(userid.uid, "verbalmemory", payload)

      return {
        ...state,
        verbalmemory: payload,

      }; case VISUAL_MEMORY:

      Savedata(userid.uid, "visualmemory", payload)

      return {
        ...state,
        visualmemory: payload,

      };
    case REACTION_TIME:

      Savedata(userid.uid, "reactiontime", payload)

      return {
        ...state,
        reactiontime: payload + "ml",

      };



    default:
      return { ...state.dashboad, };
  }
}





