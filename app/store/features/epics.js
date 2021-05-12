import { catchError, delay, map, mergeMap, takeUntil, tap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import {
  axiosFailure,
  axiosRequest,
  axiosSuccess,
  cancel,
  getTodoFailure,
  getTodoRequest,
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  getTodoSuccess,
  getUsersFailure,
  getUsersRequest,
  getUsersSuccess,
  ping,
  pong,
} from './actions';
import { from, of } from 'rxjs';

export const pingEpic = action$ =>
  action$.pipe(
    ofType(ping),
    delay(1000),
    map(action => pong()),
    takeUntil(action$.pipe(ofType(cancel))),
  );

export const pongEpic = action$ =>
  action$.pipe(
    ofType(pong),
    delay(1000),
    map(action => ping()),
    takeUntil(action$.pipe(ofType(cancel))),
  );

export const getTodosEpic = (action$, state) =>
  action$.pipe(
    ofType(getTodosRequest),
    map(action =>
      axiosRequest(
        'todos',
        'GET',
        {},
        getTodosSuccess,
        getTodosFailure,
      ),
    ),
  );

export const getTodoEpic = (action$, state) =>
  action$.pipe(
    ofType(getTodoRequest),
    map(action =>
      axiosRequest(
        `todos/${ action.payload }`,
        'GET',
        {},
        getTodoSuccess,
        getTodoFailure,
      ),
    ),
  );

export const getUsersEpic = (action$, state) =>
  action$.pipe(
    ofType(getUsersRequest),
    map(action =>
      axiosRequest(
        `users`,
        'GET',
        {},
        getUsersSuccess,
        getUsersFailure,
      ),
    ),
  );


/*export const axiosRequestEpic = (action$, state$, { axios }) =>
  action$.pipe(
    ofType(axiosRequest),
    mergeMap(action => {
        return from(axios(
          'todos/1',
          'GET',
        )).pipe(
          map(response => axiosSuccess(response)),
          catchError(error => of(axiosFailure(error))),
        );
      },
    ),
  );*/

//Complicated
export const apiRequestEpic = (action$, state$, { axios }) =>
  action$.pipe(
    ofType(axiosRequest),
    mergeMap(action =>
      from(axios(
        action.payload.url,
        action.payload.method,
        {}, //Headers -> Authorization: Bearer JWT
        action.payload.data,
      )).pipe(
        mergeMap(response => {
          console.log(response);
          return of(
            axiosSuccess({
              onSuccess: action.payload.onSuccess,
              data: response,
            }),
          );
        }),
        catchError(error => {
          console.log(action.payload);
          return of(axiosFailure({
              onFailure: action.payload.onFailure,
              data: error,
            }),
          );
        }),
      ),
    ),
  );

export const apiSuccessEpic = (action$, state$) =>
  action$.pipe(
    ofType(axiosSuccess),
    tap(action => console.log(action)),
    map(action => action.payload.onSuccess(action.payload.data)),
  );

export const apiFailureEpic = (action$, state$) =>
  action$.pipe(
    ofType(axiosFailure),
    tap(action => console.log(action)),
    map(action => action.payload.onFailure(action.payload.data)),
  );
