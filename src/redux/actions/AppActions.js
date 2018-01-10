import { CHANGE_EMAIL, CHANGE_PASSWORD } from '../types/types';

export const changeEmail = (text) => {
  return { type: CHANGE_EMAIL, payload: text };
};

export const changePassword = (text) => {
  return { type: CHANGE_PASSWORD, payload: text };
};
