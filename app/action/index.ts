import { Action } from 'redux';

export const createAction = (type: String, payload: any = {}): Action => ({ type, ...payload });

export const createSuccessAction = (type: String, response: any, payload: any = {}): SuccessAction => ({
  type,
  response,
  ...payload,
});

export const createFailureAction = (type: String, error: any, payload: any = {}): FailureAction => ({
  type,
  error,
  ...payload,
});

export const createAsyncType = (baseType: String): AsyncType => ({
  fetch: `Fetch${baseType}Action`,
  request: `${baseType}RequestAction`,
  success: `${baseType}SuccessAction`,
  failure: `${baseType}FailureAction`,
});

export const createAsyncAction = (asyncType: AsyncType) => ({
  request: (params: any = {}) => createAction(asyncType.request, params),
  success: (response: any, params: any = {}) => createSuccessAction(asyncType.success, response, params),
  failure: (error: any, params: any = {}) => createFailureAction(asyncType.failure, error, params),
});

export interface AsyncType {
  fetch: String;
  request: String;
  success: String;
  failure: String;
}

export interface SuccessAction extends Action {
  response: any;
}

export interface FailureAction extends Action {
  error: any;
}
