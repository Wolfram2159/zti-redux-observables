import { delay, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// eslint-disable-next-line import/named
import { ping, pong } from './actions';

export const pingEpic = action$ =>
  action$.pipe(
    ofType(ping),
    delay(1000),
    mapTo(pong),
  );
