import { PRODUCT_DATA,ADD_ITEM,REMOVE_ITEM,
  SEQUENCE,
  NUMBER_MEMORY,
  VERBAL_MEMORY,
  VISUAL_MEMORY,
  REACTION_TIME
} from "../actions/types";



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
    const { type, payload } = action;
    console.log(payload)
    switch (type) {
        case SEQUENCE:
            return {
              ...state,
              sequence: payload,
              
            };
            case NUMBER_MEMORY:
            return {
              ...state,
              numbermemory: payload,
              
            };
            case VERBAL_MEMORY:
            return {
              ...state,
              verbalmemory: payload,
              
            };case VISUAL_MEMORY:
            return {
              ...state,
              visualmemory: payload,
              
            };case REACTION_TIME:
            return {
              ...state,
              ractiontime: payload,
              
            };

           
          
          default:
            return state.dashboad;
    }
}