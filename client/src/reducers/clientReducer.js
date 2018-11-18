import {GET_Client, ADD_Client, DEL_Client, Client_LOADING} from '../actions/types';
const initialState={
	clients:[]
}

export default function(state= initialState, action) {

 switch(action.type) {

 	case GET_Client: return {

		...state,
		 		

 	};
	case DEL_Client: return {

		...state,
		clients: state.clients.filter(client => client._id !== action.payload)

	};
	case ADD_Client: return{

		...state,
		clients:[action.payload, ...state.clients] 

	};
	case Client_LOADING: return{
		...state, loading: true

	};
	default : return state;
 }


}
