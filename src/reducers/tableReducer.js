import {
	TABLE_RENDER, TABLE_CLEAR,
	
} from '../constants/types';
import { tableClear } from '../actions';
let initialState = [];

const tableReducer = (state = initialState, action) => {
	const  data  = action.payload;
	console.log("data in the table  reducer");
	
	switch (action.type) {
		case TABLE_RENDER:
			let flag = false;
		// console.log('TO RENDER',data);
	     //maybe we can use filter here to filter same sort of items may be one solution @coomment subas
		  console.log([...state,data]);
		   state.map((item) =>{
			   if(item.id==data.id){
				   item.quantity=data.quantity ; 
				   flag=true;
			   }
		   })
		   if(flag==true){
			return[...state]
			}
			else{
			return [...state,data]
			}
		case TABLE_CLEAR:
			state=initialState;
			return state
		default:
			
			return state;
	}
}

export default tableReducer;
