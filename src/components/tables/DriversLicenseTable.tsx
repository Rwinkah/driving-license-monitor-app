import React from "react";
import "../../styles/DriversLicenseTable.scss";

const DriversLicenseTable = () => {
  return (
    <div className="driverslicense_body">
      <div className="driverslicense_title">
        <div className="driverslicense_title_header">
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
      <div className="driverslicense_table">
        <div className="driverslicense_table_header"></div>
        <table>
          <tr className="_firstrow">
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
          <tr>
            <td className="_name">John Doe</td>
            <td className="_docno">123456789</td>
            <td className="_class">A</td>
            <td className="_date1st">01/01/2020</td>
            <td className="_dateissue">01/01/2020</td>
            <td className="_dateexpire">01/01/2020</td>
            <td className="_state">Lagos</td>
            <td className="_status">Active</td>
            <td>
              <button className="_view">...</button>
            </td>
          </tr>
        </table>
        <div className="driverslicense_table_bottom">
          <div className="paging">
            <p className="pagenum">Page 1 of 1,234</p>
          </div>
          <div className="paging">
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriversLicenseTable;
