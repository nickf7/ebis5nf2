import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import HeaderTabCmp from './headerTabComponent';
import * as tabActions from './headerTabActions';
import NavBar from './navBarComponent';
import './App.css';

class HeaderTab extends Component {
  constructor(props){
    super(props);
    // No need for local state?
    // this.state ={
    //   openTabs:[{WOID:"wo1", title:"WO #1", details:"Work Order #1 Content"}, 
    //             {WOID:"wo2", title:"WO #2", details:"Work Order #2 Content"}, 
    //             {WOID:"wo3", title:"WO #3", details:"Work Order #3 content"}]
    // }
  }

  onNavWOClick(){
    this.props.actions.openNewTab({WOID:"woTA1", title:"WO TA #1", details:"Test Added Content"})
  }

  onTabChange(event){
    this.props.actions.changeSelectedTab(event);
  }
  //linkObjs = {[name="Open Work Order", action="function(){alert('OpenWorkOrder Clicked'}"]
//debugger;
  render(){
    return(
      <div className="header">
        <NavBar/>
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
