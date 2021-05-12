import { createAction } from '@reduxjs/toolkit';

export const ping = createAction('PING');
export const pong = createAction('PONG');
export const cancel = createAction('CANCEL');

export const axiosRequest = createAction('AXIOS_REQUEST', (url, method, body, onSuccess, onFailure) => ({
    payload: {
      url: url,
      method: method,
      body: body,
      onSuccess: onSuccess,
      onFailure: onFailure,
    },
  }),
);
export const axiosSuccess = createAction('AXIOS_SUCCESS');
export const axiosFailure = createAction('AXIOS_FAILURE');

export const getTodosRequest = createAction('GET_TODOS_REQUEST');
export const getTodosSuccess = createAction('GET_TODOS_SUCCESS');
export const getTodosFailure = createAction('GET_TODOS_FAILURE');

export const getTodoRequest = createAction("GET_TODO_REQUEST");
export const getTodoSuccess = createAction("GET_TODO_SUCCESS");
export const getTodoFailure = createAction("GET_TODO_FAILURE");

export const getUsersRequest = createAction("GET_USERS_REQUEST");
export const getUsersSuccess = createAction("GET_USERS_SUCCESS");
export const getUsersFailure = createAction("GET_USERS_FAILURE");

export const forkJoinAction = createAction("FORK_JOIN");
export const successAction = createAction("SUCCESS_ACTION");
