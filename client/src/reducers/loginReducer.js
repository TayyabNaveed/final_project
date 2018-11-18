import { USER_LOGGED_IN ,USER_LOGGED_OUT} from "../actions/types";



export default function loginUser(state = {}, action ={} ){

        switch(action.type) {
            case USER_LOGGED_IN:
                 return action.loginUser;

            case USER_LOGGED_OUT:
                return { };
            default : return state;

        }


}