import React from "react";
import RenewalsTable from "../../components/tables/RenewalsTable";

const Renewals = () => {
  return (
    <div>
      <div className="renewals_header">
        <div>
          <div>
            <h1>Renewals</h1>
            <p>
              An aggregation of document renewals info from the Federal Road
              Safety Corps.
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

      <div className="renewals_section"></div>

      <div className="renewals_tablesection">
        <RenewalsTable />
      </div>
    </div>
  );
};

export default Renewals;
