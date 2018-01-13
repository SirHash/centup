import { CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_NAME } from '../types/types';

const INITIAL_STATE = {
  name: 'higornunes',
  email: 'teste@teste.com',
  password: '123456',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, email: action.payload }
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload }
    case CHANGE_NAME:
      return { ...state, name: action.payload }
    default:
      return state;
  }
};
