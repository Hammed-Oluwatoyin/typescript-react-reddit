import { FetchSubRedditsAction}  from '../actions';
import {  ActionTypes } from '../actions/types';


export const subRedditsReducer = (state: any[] =[], action: FetchSubRedditsAction)=> {

    switch (action.type) {
        case ActionTypes.fetchSubReddits:
        return action.payload;
        default :
        return state;
    }

}