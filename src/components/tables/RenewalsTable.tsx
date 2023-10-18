import React from "react";

const RenewalsTable = () => {
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
          <tr>
            <th>Full name</th>
            <th>Document number</th>
            <th>Class</th>
            <th>Date of 1st Issue</th>
            <th>Issued on</th>
            <th>Expires on</th>
            <th>State</th>
            <th>Status</th>
            <th></th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>123456789</td>
            <td>A</td>
            <td>01/01/2020</td>
            <td>01/01/2020</td>
            <td>01/01/2020</td>
            <td>Lagos</td>
            <td>Active</td>
            <td>
              <button>View</button>
            </td>
          </tr>
        </table>
        <div className="DocumentRenewal_table_bottom">
          <div>
            <p>Page 1 of 1,234</p>
          </div>
          <div>
            <button>Previous</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenewalsTable;
