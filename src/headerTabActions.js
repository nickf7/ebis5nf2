import * as consts from './constants';

export function openNewTab(newTab){
  return{
    type:consts.OPEN_NEW_TAB,
    newTab
  };
}
