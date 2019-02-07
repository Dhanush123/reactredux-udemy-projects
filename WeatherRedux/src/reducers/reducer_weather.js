import { FETCH_WEATHER } from "../actions";

export default function(state=[],action){
    console.log("action received in weather reducer:",action);
    //reminder: never mutate state in reducers!!!
    switch(action.type){
        case FETCH_WEATHER:
            //equivalent to: state.concat([action.payload.data]);
            return [action.payload.data, ...state];
    }
    return state;
}