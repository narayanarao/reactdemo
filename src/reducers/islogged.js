import * as actions from '../actions/actiontypes';
const islogged = (state=false,action) =>{
  switch(action.type){
        case actions.SING_IN:
          return !state;
        default:
          return state;
  }
}
export default islogged;