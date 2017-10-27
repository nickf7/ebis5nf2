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

  onNavClick = (name) => {
    this.props.actions.openNewTab({WOID:name, title:name, details:"Work Order:" +name +"Content"});
    alert(name+" was clicked");
  }

  linkObjs = [{name:"OpnWO"},
              {name:"EqBrwse"},
              {name:"SumpinElse"}];
//debugger;
  render(){
    return(
      <div className="header">
        <NavBar links={this.linkObjs} onClick={this.onNavClick}/>
        <HeaderTabCmp {...this.props} />
      </div>
    )
  }
}

function mapStoreToProps(store, ownProps){
  return {openTabs: store.headerTabs.openTabs};
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(tabActions, dispatch)
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(HeaderTab);
