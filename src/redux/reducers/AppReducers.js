import { USER_EMAIL } from '../types/types'

const INITIAL_STATE = {
  user_email: 'teste@teste.com',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_EMAIL:
      return { ...state, user_email: action.payload }
    default:
      return state;
  }
};
