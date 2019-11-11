import { combineReducers } from 'redux';
import userReducer from './userReducer';
import  addQuantity from './addQuantity';
import tableReducer from './tableReducer';
import textRender from './textRender';
import salesReducer from './salesReducer';
import selectReducer from './selectReducer';



const rootReducer = combineReducers({
	user: userReducer,
	quantity : addQuantity,
	tableItem : tableReducer,
	salesItem:salesReducer,
	selectedItem:selectReducer,
	textToRender:textRender,
	
});

export default rootReducer;
