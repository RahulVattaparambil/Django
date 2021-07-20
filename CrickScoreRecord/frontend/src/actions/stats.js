import axios from 'axios';

import { GET_STATS , DELETE_STAT, ADD_STAT} from './types'

//GET_STATS
export const getstats = () => dispatch => {
	axios.get("/api/stats/")
		.then(res => {
			dispatch({
				type: GET_STATS,
				payload: res.data
			});
		}).catch(err => console.log(err));
};

//DELETE STATS
export const deletestat = (id) => dispatch => {
	axios.delete(`/api/stats/${id}/`)
		.then(res => {
			dispatch({
				type: DELETE_STAT,
				payload: id
			});
		}).catch(err => console.log(err));
};
export const addstat = (stat) => dispatch => {
	axios.post("/api/stats/", stat)
		.then(res => {
			dispatch({
				type: ADD_STAT,
				payload: res.data
			});
		}).catch(err => console.log(err));
};