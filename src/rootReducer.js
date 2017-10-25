import {combineReducers} from 'redux';
import headerTabs from './headerTabsReducer';

const appReducer = combineReducers({
  headerTabs
});

const rootReducer = (state, action) => {
  return appReducer(state,action);
}

export default rootReducer;