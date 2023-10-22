import React from "react";
import DriversLicenseTable from "../../components/tables/DriversLicenseTable";

const DriversLicense = () => {
  return (
    <div>
      <div className="driverslicense_header">
        <div>
          <div>
            <h1>Drivers License</h1>
            <p>
              An aggregation of registered drivers license info from the Federal
              Road Safety Corps.
            </p>
          </div>

          <div>
            <button>Download report</button>
            <button>Download report</button>
          </div>
        </div>

        <div>
          <div>
            <button>12 months</button>
            <button>30 days</button>
            <button>7 days</button>
            <button>24 hours</button>
          </div>

          <div>
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
