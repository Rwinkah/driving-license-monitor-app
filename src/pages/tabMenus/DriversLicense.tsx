import React from "react";
import DriversLicenseTable from "../../components/tables/DriversLicenseTable";
import "../../styles/DriversLicense.scss";

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
      </div>

      <div className="driverslicense_section"></div>

      <div className="driverslicense_tablesection">
        <DriversLicenseTable />
      </div>
    </div>
  );
};

export default DriversLicense;
