import React from "react";
import OverviewSection from "../../components/sections/OverviewSection";

const Overview = () => {
  return (
    <div>
      <div className="overview_header">
        <div>
          <div>
            <h1>FRSC Metrics</h1>
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

      <OverviewSection />
    </div>
  );
};

export default Overview;
