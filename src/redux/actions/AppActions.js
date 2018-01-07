import { USER_EMAIL } from '../types/types';

export const changeEmail = email => {
  return { type: USER_EMAIL, payload: email };
};
