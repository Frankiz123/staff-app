import { AnyAction } from 'redux';
import { takeLatest } from 'redux-saga/effects';
import { navigate } from 'utils/rootNavigation';
import { NAVIGATE_ACTION } from './constants';

export function* navigateSaga({ name, params }: AnyAction) {
  try {
    yield navigate(name, params);
  } catch (error) {
    console.error({ error });
  }
}

// Individual exports for testing
export default function* navigationProviderSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(NAVIGATE_ACTION, navigateSaga);
}
