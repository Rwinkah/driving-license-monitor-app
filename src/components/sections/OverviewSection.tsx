import React, { useState, useEffect } from "react";
import {
  getDriversCount,
  getDriversWithExpiringDocuments,
  getDriversWithLicenses,
  getDriversWithValidVehiclePapers,
} from "../../api";
import { MetricCard } from "../cards";

const OverviewSection = () => {
  const [noDrivers, setNoDrivers] = useState(0);
  const [noValidDrivers, setNoValidDrivers] = useState(0);
  const [noDriversExpiring, setNoDriversExpiring] = useState(0);
  const [noValidVehiclePapers, setNoValidVehiclePapers] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const driversCount = await getDriversCount();
    const validDriversCount = await getDriversWithLicenses();
    const driversExpiringCount = await getDriversWithExpiringDocuments();
    const validVehiclePapersCount = await getDriversWithValidVehiclePapers();

    setNoDrivers(driversCount);
    setNoValidDrivers(validDriversCount);
    setNoDriversExpiring(driversExpiringCount);
    setNoValidVehiclePapers(validVehiclePapersCount);
  };
  return (
    <div className="metrics_setion">
      <MetricCard title="Persons with drivers licenses" value={noDrivers} />
      <MetricCard title="Persons with vehicle papers" value={noDrivers} />
      <MetricCard
        title="Persons whose documents expire in 6 months"
        value={noDriversExpiring}
      />
      <MetricCard
        title="Persons with valid drivers licenses"
        value={noValidDrivers}
      />
      <MetricCard
        title="Persons with valid vehicle papers"
        value={noValidVehiclePapers}
      />
    </div>
  );
};

export default OverviewSection;
