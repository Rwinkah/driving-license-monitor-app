import React from "react";
import RenewalsTable from "../../components/tables/RenewalsTable";
import { RenewalSection } from "../../components/sections";

const Renewals = () => {
  return (
    <div className="pagebody">
      <div className="pagebody_header">
        <div className="pagebody_header_top">
          <div className="pagebody_header_top_text">
            <h1>Renewals</h1>
            <p>
              An aggregation of document renewals info from the Federal Road
              Safety Corps.
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

    <RenewalSection />

      <div className="renewals_tablesection">
        <RenewalsTable />
      </div>
    </div>
  );
};

export default Renewals;
