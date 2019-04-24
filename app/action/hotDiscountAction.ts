import { createAction, createAsyncAction, createAsyncType } from './index';

export const hotDiscountAsyncType = createAsyncType('HotDiscount');

export const fetchHotDiscountAction = (id: Number, orderType: String) => createAction(hotDiscountAsyncType.fetch, {
  orderType,
});

export const hotDiscountAsyncAction = createAsyncAction(hotDiscountAsyncType);




