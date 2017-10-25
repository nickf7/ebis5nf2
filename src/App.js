import React, { Component } from 'react';
import logo from './resources/images/CirclePlane.png';
import './App.css';
//import {Tabs, TabLink, TabContent} from 'react-tabs-redux';
import HeaderTab from './headerTabComponent'

const App = (props) => {//class App extends Component {
  //render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="EBis5 logo" />
        <h1 className="App-title">EBis 5</h1>
      </header>
      
      <HeaderTab {...props} />

      {/*openTabs='["tab1","tab2","tab3"]'
       <Tabs className="tabs" name="headerTabs" handleSelect={props.changeSelectedTab} selectedTab={props.tabs}>
      
        <TabLink to="tab1">Tab1</TabLink>
        <TabLink to="tab2">Tab2</TabLink>
        <TabLink to="tab3">Tab3</TabLink>

        <TabContent for="tab1">
          <h2>Tab1 content</h2>
          <p>
              Test Tab 1 content p1
          </p>
          <p>
              Test Tab 1 Content p2
          </p>
        </TabContent>
        <TabContent for="tab2">
          <h2>Test Tab2 content</h2>
          <div>¯\_(ツ)_/¯</div>
        </TabContent>
        <TabContent for="tab3">
          <h2>Test Tab3 content</h2>
          <div>(╯°□°）╯︵ ┻━┻)</div>
        </TabContent>
      </Tabs> */}
    </div>
  );
}
//}

export default App;
