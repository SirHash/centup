import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
} from '../types/types';

export const modificaEmail = (texto) => {
  return {
    type: MODIFICA_EMAIL,
    payload: texto
  }
}
