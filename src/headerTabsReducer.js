import CHANGE_SELECTED_TAB from './constants';

const initialState = {}

export default function headerTabsReducer(state = initialState, action){
  switch(action.type){
    case CHANGE_SELECTED_TAB:
      return Object.assign({}, state,{
        ...state,
        [action.namespace]: action.tab
      });
    default:
    return state;
  }
}