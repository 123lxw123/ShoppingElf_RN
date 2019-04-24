///<reference path="../action/index.ts"/>
import immutable from 'immutable';
import { createReducer, successReducer, requestReducer, failureReducer } from './index';
import { hotDiscountAsyncType } from './../action/hotDiscountAction';
import { SuccessAction } from './../action/index';

const initialState = immutable.fromJS({
  isLoading: false,
  isSuccess: false,
  data: [],
});

export default createReducer(initialState, {
  [hotDiscountAsyncType.success.toString()]: (state: any, action: SuccessAction) => {
    return successReducer(state).merge({
      data: [],
    });
  },
  [hotDiscountAsyncType.request.toString()]: requestReducer,
  [hotDiscountAsyncType.failure.toString()]: failureReducer,
});

