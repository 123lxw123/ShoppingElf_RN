import { put, call } from 'redux-saga/effects';

export function* asyncEffect(apiFn, actions: any, params: any = {}) {
  if (!apiFn) throw new Error('apiFn does not exist');
  if (!actions) throw new Error('actions does exist');

  yield put(actions.request(params));
  try {
    const { response, error } = yield call(apiFn, ...Object.values(params));
    if (response) {
      yield put(actions.success(response, params));
      // return { response };
    } else {
      yield put(actions.failure(error, params));
      // return { error };
    }
  } catch (e) {
    yield put(actions.failure(e, params));
    // return { error: e };
  }
}
