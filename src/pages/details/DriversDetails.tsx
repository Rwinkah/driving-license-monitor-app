import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DriversDetailsSection from "../../components/sections/DriversDetailsSection";
import DriversDetailsTable from "../../components/tables/DriversDetailsTable";

const DriversDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    // fetch data from api
  }, [id]);

  return (
    <div className="detailspage_container">
      <div className="detailspage_wrapper">
        <div className="detailspage_header">
          <div className="detailspage_navigation"></div>

          <div className="detailspage_header_text">
            <img src="" alt="profile " />
            <h1>Titi Omolara Emmanuel</h1>
          </div>
        </div>

        <DriversDetailsSection />

        <DriversDetailsTable />
      </div>
    </div>
  );
};

export default DriversDetails;
