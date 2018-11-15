import { FETCH_WEATHER } from "../actions/index";

export default function(state=[],action){
   
    switch (action.type) {
         
        case FETCH_WEATHER:
            //action payload data saving in an arrey
            //we concat array by ES6 syntax

            return [ action.payload.data, ...state ];
    
       
    }

    return state;
}