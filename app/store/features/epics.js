import { catchError, delay, map, mergeMap, takeUntil } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { axiosFailure, axiosRequest, axiosSuccess, cancel, ping, pong } from './actions';
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

export const axiosRequestEpic = (action$, state$, { axios }) =>
  action$.pipe(
    ofType(axiosRequest),
    mergeMap(action => {
        console.log(axios);
        return from(axios(
          'todos/1',
          'GET',
        )).pipe(
          map(response => axiosSuccess(response)),
          catchError(error => of(axiosFailure(error))),
        );
      },
    ),
  );
