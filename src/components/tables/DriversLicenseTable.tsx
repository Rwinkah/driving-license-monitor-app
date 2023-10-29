import React, { useEffect, useState } from "react";
import { DriversApi } from "../../api";
import { Driver, DriverData } from "../../types/drivers_data_interface";
import "../../styles/DriversLicenseTable.scss";

const DriversLicenseTable = () => {
  const [getDrivers, setDrivers] = useState<Driver[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchDrivers();
  }, [page]);

  const fetchDrivers = async () => {
    const drivers: DriverData[] = await DriversApi(page, 10);

    setDrivers(drivers[0].drivers);
  };

  return (
    <div className="tablebody">
      <div className="tablebody_title">
        <div className="tablebody_title_header">
          <h3>
            Registered persons{"  "}
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
              {/* <th></th> */}
              <th className="_name">Full name</th>
              <th className="_docno">Document number</th>
              <th className="_class">Class</th>
              <th className="_date1st">Date of 1st Issue</th>
              <th className="_dateissue">Issued on</th>
              <th className="_dateexpire">Expires on</th>
              <th className="_state">State</th>
              <th className="_status">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getDrivers.map((driver) => (
              <tr key={driver.id}>
                {/* <td></td> */}
                <td className="_name">{driver.fullName}</td>
                <td className="_docno">
                  {driver.driverLicense.documentNumber}
                </td>
                <td className="_class">{driver.vehicles[0].class}</td>
                <td className="_date1st">
                  {driver.driverLicense.dateOfFirstIssue}
                </td>
                <td className="_dateissue">{driver.driverLicense.issuedOn}</td>
                <td className="_dateexpire">
                  {driver.driverLicense.expiresOn}
                </td>
                <td className="_state">{driver.driverLicense.state}</td>
                <td className="_status">{driver.driverLicense.status}</td>
                <td>
                  <button className="_view">...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="tablebody_table_bottom">
          <div className="paging">
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

export default DriversLicenseTable;
