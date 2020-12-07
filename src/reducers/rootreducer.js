import {combineReducers} from 'redux';
import islogged from './islogged';
const rootreducer = combineReducers({
     islogged:islogged
})
export default rootreducer;