import * as actions from './actiontypes';
export const islogged = (islogged) =>({
    type:actions.SING_IN,
    payload : {
       islogged:islogged
    }  
})
