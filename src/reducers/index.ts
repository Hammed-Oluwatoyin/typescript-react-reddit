import { combineReducers } from 'redux';
import {subRedditsReducer} from './subreddits';

export interface StoreState {
    subreddits: any[];
}

export const reducers = combineReducers<StoreState>({
    subreddits: subRedditsReducer
});