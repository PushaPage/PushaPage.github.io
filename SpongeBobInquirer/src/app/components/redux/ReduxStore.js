import { combineReducers, createStore } from 'redux';


let redusers = combineReducers({

	keya: 5,
	keyb: 10
})

let stoore = createStore(redusers);


export default stoore;