/**
 * NavigationProvider actions
 */

import { NAVIGATE_ACTION } from './constants';

export function navigateAction(name: string, params?: Object) {
  return {
    type: NAVIGATE_ACTION,
    name,
    params,
  };
}
