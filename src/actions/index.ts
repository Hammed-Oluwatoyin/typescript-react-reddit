import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';





export interface FetchSubRedditsAction {

    type: ActionTypes.fetchSubReddits;
    payload: any[];
}

const politics = 'politics';


const url = `https://www.reddit.com/.json`;

export const fetchSubReddits = () => {
    

   
    return async (dispatch: Dispatch) => {
        
        const responseData = await axios.get(url).then((res) => { 
           return res.data.data.children.map((item: any) => item.data);
            
          });
        

        dispatch <FetchSubRedditsAction>({
            type:ActionTypes.fetchSubReddits,
            payload: responseData
        });
    };
};