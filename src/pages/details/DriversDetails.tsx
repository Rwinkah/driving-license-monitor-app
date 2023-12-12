import React from "react";
import { useParams } from "react-router-dom";

const DriversDetails = () => {
  const { id } = useParams();

  return (
    // Your component JSX
    <div>
      <h1>Driver Details</h1>
      <p>Driver ID: {id}</p>
    </div>
  );
};

export default DriversDetails;
