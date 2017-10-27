import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import HeaderTabCmp from './headerTabComponent';
import * as tabActions from './headerTabActions';
import NavBar from './navBarComponent';
import './App.css';

class HeaderTab extends Component {
  // constructor(props){
  //   super(props);
  // }

  onNavClick(name){
    tabActions.openNewTab({WOID:"wo"+name, title:"WO "+name, details:"Work Order:" +name +"Content"});
    alert(name+" was clicked");
  }

  onTabChange(event){
    this.props.actions.changeSelectedTab(event);
  }
  linkObjs = [{name:"Open Work Order"},
              {name:"Open Eq Browse Order"},
              {name:"Open Somethin Else"}];
//debugger;
  render(){
    return(
      <div className="header">
        <NavBar links={this.linkObjs} onClick={this.onNavClick}/>
        <HeaderTabCmp handleSelect={this.changeSelectedTab} {...this.props} />
      </div>
    )
  }
}

function mapStoreToProps(store, ownProps){
  //debugger;
  return {openTabs: store.headerTabs.openTabs};
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(tabActions, dispatch)
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(HeaderTab);
