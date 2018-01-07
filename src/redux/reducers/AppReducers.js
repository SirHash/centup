import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
} from '../types/types';

const INITIAL_STATE = {
  email: 'reynaldomarinho@hotmail.com',
  senha: '',
}

export default (state = INITIAL_STATE, action) => {
  //console.log(action);
  switch(action.type) {
    case MODIFICA_EMAIL:
      return { ...state, email: action.payload }
    case MODIFICA_SENHA:
      return { ...state, senha: action.payload }
    default:
      return state;
  }
}
