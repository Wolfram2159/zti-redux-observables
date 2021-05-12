import { createReducer } from '@reduxjs/toolkit';
import { getTodosSuccess, getUsersSuccess } from './actions';

export default createReducer({
  todos: null,
  users: null
}, {
  [getTodosSuccess]: (state, action) => {
    state.todos = action.payload.data;
  },
  [getUsersSuccess]: (state, action) => {
    state.users = action.payload.data;
  }
}, [], state => state);
