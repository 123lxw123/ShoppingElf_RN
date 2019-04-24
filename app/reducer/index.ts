import immutable from 'immutable';
import { Action, combineReducers } from 'redux';

export function createReducer(initialState: any, handlers: any) {
  return (state = initialState, action: Action) => {
    let nextState = state;
    if (!immutable.Map.isMap(state) && !immutable.List.isList(state)) {
      nextState = immutable.fromJS(state);
    }

    const handler = handlers[action.type];

    if (!handler) {
      return nextState;
    }

    nextState = handler(state, action);

    if (!immutable.Map.isMap(state) && !immutable.List.isList(state)) {
      throw new TypeError('Reducers must return immutable objects.');
    }

    return nextState;
  };
}

export const successReducer = (state: any) => state.merge({
  isFetching: false,
  isSuccess: true,
});

export const requestReducer = (state: any) => state.merge({
  isFetching: true,
  isSuccess: false,
});

export const failureReducer = (state: any) => state.merge({
  isFetching: false,
  isSuccess: false,
});

const appReducer = combineReducers({});

export default appReducer;
