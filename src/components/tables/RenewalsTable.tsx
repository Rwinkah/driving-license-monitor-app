import React, { useEffect, useState } from "react";
import { DriversApi } from "../../api";
import { Driver, DriverData } from "../../types/drivers_data_interface";

const RenewalsTable = () => {
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
            Document renewals{" "}
            <span>2,345 new registrations in the last quarter </span>
            <h6>All vehicle document renewals</h6>
          </h3>
        </div>
        <div>
          <button>Export</button>
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
              <th className="_plateno">Document number</th>
              <th className="_state">State</th>
              <th className="_valid">Document name</th>
              <th className="_expire">Issued on</th>
              <th className="_expire">Expires on</th>
            </tr>
          </thead>
          <tbody>
            {getDrivers.map((driver) => (
              <tr key={driver.id}>
                <td className="_checkbox"></td>
                <td className="_drivername">{driver.fullName}</td>
                <td className="_phoneno">{driver.phoneNumber}</td>
                <td className="_plateno">
                  {driver.vehicles[0].documents[0].documentNumber}
                </td>
                <td className="_state">
                  {driver.vehicles[0].documents[0].state}
                </td>
                <td className="_valid">
                  {driver.vehicles[0].documents[0].documentName}
                </td>
                <td className="_phoneno">
                  {driver.vehicles[0].documents[0].issuedOn}
                </td>
                <td className="expiredate">
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

export default RenewalsTable;
