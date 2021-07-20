import { GET_STATS, DELETE_STAT ,ADD_STAT} from "../actions/types.js";

const initialState={
	stats: []
}

export default function(state = initialState, action){
	switch(action.type){
		case GET_STATS:
			return{
				...state,
				stats: action.payload
			};
		case DELETE_STAT:
			return{
				...state,
				stats: state.stats.filter(stat => stat.id !== action.payload)
			}
		case ADD_STAT:
			return{
				...state,
				stats: [...state.stats, action.payload]
			}
		default:
			return state;
	}
}