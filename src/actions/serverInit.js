import actions from '../constants/actions';

const serverInit = () => dispatch => dispatch({
  type: actions.APP_INITIALIZED_SUCCESS,
});

export default serverInit;
