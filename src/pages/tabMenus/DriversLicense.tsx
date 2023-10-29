import React from "react";

import "../../styles/DriversLicense.scss";

import { DriversLicenseTable } from "../../components/tables";
import { DriversLicenseSection } from "../../components/sections";


const DriversLicense = () => {
  return (
    <div className="pagebody">
      <div className="pagebody_header">
        <div className="pagebody_header_top">
          <div className="pagebody_header_top_text">
            <h1>Drivers License</h1>
            <p>
              An aggregation of registered drivers license info from the Federal
              Road Safety Corps.
            </p>
          </div>

          <div className="pagebody_header_top_filters">
            <button className="button_report">Download report</button>
            <button className="button_register">Register a user</button>
          </div>
        </div>

        <div className="pagebody_header_timeline">
          <div className="pagebody_header_timeline_dates">
            <button>12 months</button>
            <button>30 days</button>
            <button>7 days</button>
            <button>24 hours</button>
          </div>

          <div className="pagebody_header_timeline_buttons">
            <button>Select dates</button>
            <button>Filters</button>
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
