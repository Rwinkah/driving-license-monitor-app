import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Overview from "./tabMenus/Overview";
import DriversLicense from "./tabMenus/DriversLicense";
import VehiclePapers from "./tabMenus/VehiclePapers";
import Renewals from "./tabMenus/Renewals";
import "../styles/Tabs.scss";

const Main = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Tabs
        className="tabs no-border maintab"
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
          <div className="tabs-content">
            <Overview />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tabs-content">
            <DriversLicense />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tabs-content">
            <VehiclePapers />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tabs-content">
            <Renewals />
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Main;
