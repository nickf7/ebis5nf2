import React from 'react';
import './App.css';
import {Tabs, TabLink, TabContent} from 'react-tabs-redux';

const HeaderTab = (props) => {//var openTabs=[{WOID:"wo1",title:"WO #21", details:"Work Order #1 Content"}, {WOID:"wo2",title:"WO #2",details:"Work Order #2 Content"}, {WOID:"wo3",title:"WO #3", details:"Work Order #3 content"}];
//debugger;  
return (
    <Tabs className="tabs">
      <div>
        {
          
          props.openTabs.length <1 && <div className="text">No Tabs Open</div>
        }
        {
          props.openTabs.length ? (

            props.openTabs.map((tbs, i) => {
              return<TabLink key={i} to={tbs.WOID}>{tbs.title}</TabLink>
            })
          ) : null        
        }
        {
          props.openTabs.length ? (

            props.openTabs.map((tbs, i) => {
              return <TabContent key={i} for={tbs.WOID}> {tbs.details}  </TabContent>
            })
          ) : null        
        }
      </div>
    </Tabs>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="EBis5 logo" />
    //     <h1 className="App-title">EBis 5</h1>
    //   </header>
      
    //   <Tabs className="tabs" name="headerTabs" handleSelect={props.changeSelectedTab} selectedTab={props.tabs}>
      
    //     <TabLink to="tab1">Tab1</TabLink>
    //     <TabLink to="tab2">Tab2</TabLink>
    //     <TabLink to="tab3">Tab3</TabLink>

    //     <TabContent for="tab1">
    //       <h2>Tab1 content</h2>
    //       <p>
    //           Test Tab 1 content p1
    //       </p>
    //       <p>
    //           Test Tab 1 Content p2
    //       </p>
    //     </TabContent>
    //     <TabContent for="tab2">
    //       <h2>Test Tab2 content</h2>
    //       <div>¯\_(ツ)_/¯</div>
    //     </TabContent>
    //     <TabContent for="tab3">
    //       <h2>Test Tab3 content</h2>
    //       <div>(╯°□°）╯︵ ┻━┻)</div>
    //     </TabContent>
    //   </Tabs>
    // </div>
  );
}
//}

export default HeaderTab;