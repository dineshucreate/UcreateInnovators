import { ON_USER_LOGOUT } from './constants';

export const onLogOut = (navigation) => ({
  type: ON_USER_LOGOUT,
  navigation,
});
