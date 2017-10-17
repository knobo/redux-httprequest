import actions, { STATE_PENDING, STATE_COMPLETE, STATE_FAILED } from './actions';
import reducer from './reducer';
// import reducers from './reducers';
import { initialState, requestState, loadState, clearState } from './reducers';

export {
    // Reducers
    initialState,
    requestState,
    loadState,
    clearState,

    actions,
    reducer, // @DEPRECATED
    // reducers,
    STATE_PENDING, // @DEPRECATED
    STATE_COMPLETE, // @DEPRECATED
    STATE_FAILED // @DEPRECATED
};

export default actions;
