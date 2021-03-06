import {createStore} from 'redux';
import rootReducer from './rootReducer';

export default function configureStore(initialStore){
  return createStore(
    rootReducer,
    initialStore,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
}
