import React, { useEffect, useState } from "react";
import { DriversApi } from "../../api";
import { Driver, DriverData } from "../../types/drivers_data_interface";

const RenewalsTable = () => {
  const [getDrivers, setDrivers] = useState<Driver[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    const drivers: DriverData[] = await DriversApi(page);

    setDrivers(drivers[0].drivers);
  };

  return (
    <div>
      <div className="DocumentRenewal_title">
        <div>
          <p>
            Document renewals{" "}
            <span>2,345 new registrations in the last quarter </span>
            <span>All vehicle document renewals</span>
          </p>
        </div>
        <div>
          <button>export</button>
        </div>
      </div>
      <div className="DocumentRenewal_table">
        <div className="DocumentRenewal_table_header"></div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Full name</th>
              <th>Phone number</th>
              <th>Document number</th>
              <th>State</th>
              <th>Document name</th>
              <th>Issued on</th>
              <th>Expires on</th>
            </tr>
          </thead>
          <tbody>
            {getDrivers.map((driver) => (
              <tr key={driver.id}>
                <td></td>
                <td>{driver.fullName}</td>
                <td>{driver.phoneNumber}</td>
                <td>{driver.vehicles[0].documents[0].documentNumber}</td>
                <td>{driver.vehicles[0].documents[0].state}</td>
                <td>{driver.vehicles[0].documents[0].documentName}</td>
                <td>{driver.vehicles[0].documents[0].issuedOn}</td>
                <td>{driver.vehicles[0].documents[0].expiresOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="DocumentRenewal_table_bottom">
          <div>
            <p>{`Page ${page} of 1,234`}</p>
          </div>
          <div>
            <button
              onClick={() => {
                if (page === 1) return;
                setPage(page - 1);
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewalsTable;
