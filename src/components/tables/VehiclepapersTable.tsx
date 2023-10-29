import React, { useEffect, useState } from "react";
import { DriversApi } from "../../api";
import { Driver, DriverData } from "../../types/drivers_data_interface";

const VehiclePapersTable = () => {
  const [getDrivers, setDrivers] = useState<Driver[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchDrivers();
  }, [page]);

  const fetchDrivers = async () => {
    const drivers: DriverData[] = await DriversApi(page);

    setDrivers(drivers[0].drivers);
  };

  return (
    <div className="tablebody">
      <div className="tablebody_title">
        <div className="tablebody_title_header">
          <h3>
            Registered persons{" "}
            <span>2,345 new registrations in the last quarter </span>
            <h6>
              Persons with licenses registered with the Federal Road Safety
              Corps.
            </h6>
          </h3>
        </div>
        <div>
          <button>export</button>
        </div>
      </div>
      <div className="tablebody_table">
        <div className="tablebody_table_header"></div>
        <table>
          <thead>
            <tr className="_firstrow">
              <th></th>
              <th className="_name">Full name</th>
              <th className="_docno">Phone number</th>
              <th>Plate number</th>
              <th>State</th>
              <th>Class</th>
              <th>Valid documents</th>
              <th>Expired documents </th>
            </tr>
          </thead>
          <tbody>
            {getDrivers.map((driver) => (
              <tr key={driver.id}>
                <td></td>
                <td>{driver.fullName}</td>
                <td>{driver.phoneNumber}</td>
                <td>{driver.vehicles[0].class}</td>
                <td>{driver.vehicles[0].plateNumber}</td>
                <td>{driver.driverLicense.state}</td>
                <td>{driver.vehicles[0].class}</td>
                <td>{driver.vehicles[0].documents[0].documentName}</td>
                <td>{driver.vehicles[0].documents[0].expiresOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="tablebody_table_bottom">
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

export default VehiclePapersTable;
