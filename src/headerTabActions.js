import * as consts from './constants';

export function openNewTab(newTab){
  return{
    type:'OPEN_NEW_TAB',
    newTab
  };
}

