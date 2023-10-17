import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../styles/Tabs.scss";

const Main = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Tabs
        className="tabs no-border"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <header>
          <TabList className="tabs-header">
            <Tab className="tabs-title">Overview</Tab>
            <Tab className="tabs-title">Drivers license</Tab>
            <Tab className="tabs-title">Vehicle papers</Tab>
            <Tab className="tabs-title">Renewals</Tab>
          </TabList>
        </header>

        <TabPanel>
          <div className="tabs-content"></div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Main;
