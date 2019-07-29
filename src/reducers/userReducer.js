import {
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRO_USUARIO_SUCESSO,
  CADASTRO_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO,
  BTN_LOADING,
} from '~/actions/constants';


const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  erroCadastro: '',
  erroLogin: '',
  btn_loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case MODIFICA_EMAIL : return { ...state, email: action.payload };
      case MODIFICA_SENHA : return { ...state, senha: action.payload };
      case MODIFICA_NOME : return { ...state, nome: action.payload };
      case CADASTRO_USUARIO_ERRO : return { ...state, erroCadastro: action.payload, btn_loading: false };
      case CADASTRO_USUARIO_SUCESSO : return { ...state, nome: '', senha: '', btn_loading: false };
      case LOGIN_USUARIO_SUCESSO : return { ...state, nome: '', senha: '', btn_loading: false };
      case LOGIN_USUARIO_ERRO :
          return {
              ...state,
              erroLogin: action.payload,
              btn_loading: false
          };
      case BTN_LOADING : return { ...state, btn_loading: true };
      default:
          return state;
  }
};