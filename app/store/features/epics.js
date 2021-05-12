import { delay, map, takeUntil } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// eslint-disable-next-line import/named
import { cancel, ping, pong } from './actions';

export const pingEpic = action$ =>
  action$.pipe(
    ofType(ping),
    delay(1000),
    map(action => pong()),
    takeUntil(action$.pipe(ofType(cancel)))
  );

export const pongEpic = action$ =>
  action$.pipe(
    ofType(pong),
    delay(1000),
    map(action => ping()),
    takeUntil(action$.pipe(ofType(cancel)))
  );
