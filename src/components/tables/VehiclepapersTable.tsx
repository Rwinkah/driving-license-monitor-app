import React, { useEffect, useState } from "react";
import { DriversApi } from "../../api";
import { Driver, DriverData } from "../../types/drivers_data_interface";
import '../../styles/VehiclepapersTable.scss'

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
        <table className="maintable">
          <thead>
            <tr className="_firstrow">
              <th className="_checkbox"></th>
              <th className="_name">Full name</th>
              <th className="_phoneno">Phone number</th>
              <th className="_plateno">Plate number</th>
              <th className="_state">State</th>
              <th className="_class">Class</th>
              <th className="_valid">Valid documents</th>
              <th className="_expire">Expired documents </th>
            </tr>
          </thead>
          <tbody>
            {getDrivers.map((driver) => (
              <tr key={driver.id}>
                <td className="_checkbox"></td>
                <td className="_drivername">{driver.fullName}</td>
                <td className="_phoneno">{driver.phoneNumber}</td>
                <td className="_plateno">{driver.vehicles[0].plateNumber}</td>
                <td className="_state">{driver.driverLicense.state}</td>
                <td className="_class">{driver.vehicles[0].class}</td>
                <td className="_valid">
                  {driver.vehicles[0].documents[0].documentName}
                </td>
                <td className="_expiredate">
                  {driver.vehicles[0].documents[0].expiresOn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="tablebody_table_bottom">
          <div className="paging vehiclepagenum">
            <p className="pagenum">{`Page ${page} of 1,234`}</p>
          </div>
          <div className="paging"> 
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
