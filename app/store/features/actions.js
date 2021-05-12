import { createAction } from '@reduxjs/toolkit';

export const ping = createAction('PING');
export const pong = createAction('PONG');
export const cancel = createAction('CANCEL');

export const axiosRequest = createAction("AXIOS_REQUEST");
export const axiosSuccess = createAction("AXIOS_SUCCESS");
export const axiosFailure = createAction("AXIOS_FAILURE");
