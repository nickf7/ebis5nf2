import * as consts from './constants';

const initialStore = {
  openTabs:[{WOID:"wo1", title:"WO #1", details:"Work Order #1 Stuff"}, 
            {WOID:"wo2", title:"WO #2", details:"Work Order #2 Content"}, 
            {WOID:"wo3", title:"WO #3", details:"Work Order #3 content"}]
}

export default function headerTabsReducer(state = initialStore, action){
  switch(action.type){
    case consts.OPEN_NEW_TAB:
      return Object.assign({}, state,{
        ...state,
        openTabs: [...state.openTabs, action.newTab] // add new tab to end of array
      });
    default:
    return state;
  }
}