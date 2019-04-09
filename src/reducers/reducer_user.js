import { USER_LOGIN } from '../constants/action_types';
const init = {};

export default function (state = init, action ){
    switch(action.type){
        
        case USER_LOGIN:
            var userData = action.payload
            return userData;
        default:
            return state;
    }
}