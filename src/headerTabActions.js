import CHANGE_SELECTED_TAB from './constants';

export function changeSelectedTab(selectedTab, tabNamespace) {
  return {
      type: CHANGE_SELECTED_TAB,
      tab: selectedTab,
      namespace: tabNamespace
  };
}