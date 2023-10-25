import React, { useState, useEffect } from "react";
import {
  getDriversCount,
  getDriversWithExpiringDocuments,
  getDriversWithLicenses,
} from "../../api";
import { MetricCard } from "../cards";

const DriversLicenseSection = () => {
  const [noDrivers, setNoDrivers] = useState(0);
  const [noValidDrivers, setNoValidDrivers] = useState(0);
  const [noDriversExpiring, setNoDriversExpiring] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const driversCount = await getDriversCount();
    const validDriversCount = await getDriversWithLicenses();
    const driversExpiringCount = await getDriversWithExpiringDocuments();

    setNoDrivers(driversCount);
    setNoValidDrivers(validDriversCount);
    setNoDriversExpiring(driversExpiringCount);
  };

  return (
    <div className="driverslicense_section">
      <MetricCard title="Persons with drivers licenses" value={noDrivers} />
      <MetricCard
        title="Persons with valid drivers licenses"
        value={noValidDrivers}
      />
      <MetricCard
        title="Persons whose documents expire in 6 months"
        value={noDriversExpiring}
      />
    </div>
  );
};

export default DriversLicenseSection;
