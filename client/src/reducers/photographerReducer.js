import {GET_Photographers} from '../actions/types';


const initialState={
    photographers:[]
}



export default function(state= initialState, action) {

    switch(action.type) {
   
        case GET_Photographers: return {
   
           ...state,
                    
   
        };
        default : return state;
    }

}