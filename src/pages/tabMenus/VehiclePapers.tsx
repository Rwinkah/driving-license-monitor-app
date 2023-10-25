import React from "react";
import VehiclepapersTable from "../../components/tables/VehiclepapersTable";
import { VehiclePaperSection } from "../../components/sections";

const VehiclePapers = () => {
  return (
    <div>
      <div className="vehiclepapers_header">
        <div>
          <div>
            <h1>Vehicle Papers</h1>
            <p>
              An aggregation of registered Vehicle Papers info from the Federal
              Road Safety Corps.
            </p>
          </div>

          <div>
            <button>Download report</button>
            <button>Register a user</button>
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

      <VehiclePaperSection />

      <div className="vehiclepapers_tablesection">
        <VehiclepapersTable />
      </div>
    </div>
  );
};

export default VehiclePapers;
