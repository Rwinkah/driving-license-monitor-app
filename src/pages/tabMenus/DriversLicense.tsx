import React from "react";
<<<<<<< HEAD
import DriversLicenseTable from "../../components/tables/DriversLicenseTable";
import "../../styles/DriversLicense.scss";
=======
import { DriversLicenseTable } from "../../components/tables";
import { DriversLicenseSection } from "../../components/sections";
>>>>>>> df033a60bc2dccb47d537927bcbb6a4a15fc3bb9

const DriversLicense = () => {
  return (
    <div className="driverslicense">
      <div className="driverslicense_header">
        <div className="driverslicense_header_top">
          <div className="driverslicense_header_top_text">
            <h1>Drivers License</h1>
            <p>
              An aggregation of registered drivers license info from the Federal
              Road Safety Corps.
            </p>
          </div>

          <div className="driverslicense_header_top_filters">
            <button className="button_report">Download report</button>
            <button className="button_register">Register a user</button>
          </div>
        </div>

        <div className="driverslicense_header_timeline">
          <div className="driverslicense_header_timeline_dates">
            <button>12 months</button>
            <button>30 days</button>
            <button>7 days</button>
            <button>24 hours</button>
          </div>

          <div className="driverslicense_header_timeline_buttons">
            <button>Select dates</button>
            <button>Filters</button>
          </div>
        </div>

        <div className="driverslicense_header_statistics">
          <div className="stats stat1">
            <h3>Persons with drivers license</h3>
            <div className="bottomstat">
              <span className="bigstat">12,156,080</span>
              <span className="tinystat green">+1.3%</span>
            </div>
          </div>
          <div className="stats stat2">
            <h3>Persons with drivers license</h3>
            <div className="bottomstat">
              <span className="bigstat">8,166,091</span>
              <span className="tinystat red">+1.3%</span>
            </div>
          </div>
          <div className="stats stat3">
            <h3>Persons whose documents expire in 6 months</h3>
            <div className="bottomstat">
              <span className="bigstat">4,784,097</span>
              <span className="tinystat neutral">+3.8%</span>
            </div>
          </div>
        </div>
      </div>

      <DriversLicenseSection />

      <div className="driverslicense_tablesection">
        <DriversLicenseTable /> 
      </div>
    </div>
  );
};

export default DriversLicense;
