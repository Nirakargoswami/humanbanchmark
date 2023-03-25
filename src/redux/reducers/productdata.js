import { PRODUCT_DATA,ADD_ITEM,REMOVE_ITEM,
  SEQUENCE,
  NUMBER_MEMORY,
  VERBAL_MEMORY,
  VISUAL_MEMORY,
  REACTION_TIME
} from "../actions/types";
import {Savedata} from "../../Firebse/firebse"
import { Co2Sharp } from "@mui/icons-material";


function createData(name, calories, fat, carbs, protein) {
  
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}
const initialState = {
  dashboad : {
    ractiontime :"",
    sequence:"",
    numbermemory:"",
    visualmemory:"",
    verbalmemory:"",
  },
}



export default function (state = initialState, action){

  const userid = JSON.parse(localStorage.getItem("user"))

    const { type, payload } = action;
    console.log(payload,type,userid)
    switch (type) {
        case SEQUENCE:
          
          
          Savedata(userid.uid,"sequencememory",payload)

            return {
              ...state,
              sequence: payload,
              
            };
            case NUMBER_MEMORY:
              Savedata(userid.uid,"numbermemory",payload)

              
            return {
              ...state,
              numbermemory: payload,
              
            };
            case VERBAL_MEMORY:
              
              Savedata(userid.uid,"verbalmemory",payload)

            return {
              ...state,
              verbalmemory: payload,
              
            };case VISUAL_MEMORY:
            
            Savedata(userid.uid,"visualmemory",payload)

            return {
              ...state,
              visualmemory: payload,
              
            };case REACTION_TIME:
            
            Savedata(userid.uid,"reactiontime",payload)

            return {
              ...state,
              ractiontime: payload,
              
            };

           
          
          default:
            return state.dashboad;
    }
}





