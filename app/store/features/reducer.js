import { createReducer } from '@reduxjs/toolkit';
import { axiosSuccess } from './actions';

export default createReducer({data: null}, {
  [axiosSuccess]: (state, action) => action.payload.data
}, [], state => state);
