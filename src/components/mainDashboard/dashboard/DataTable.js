import React, { useState } from "react";

const DataTable = ({ userList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(userList.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return userList.slice(startIndex, endIndex);
  };

  return (
    <div className="card-body">
      <table className="table table-bordered" id="datatablesSimple">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start Date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentPageData().map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.office}</td>
              <td>{user.age}</td>
              <td>{user.start_date}</td>
              <td>{user.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="datatable-bottom">
        <div className="datatable-info">
          Showing {itemsPerPage * (currentPage - 1) + 1} to{" "}
          {Math.min(itemsPerPage * currentPage, userList.length)} of{" "}
          {userList.length} entries
        </div>
        <nav className="datatable-pagination">
          <ul className="datatable-pagination-list">
            <li
              className={`datatable-pagination-list-item ${
                currentPage === 1 ? "datatable-hidden datatable-disabled" : ""
              }`}
            >
              <a
                onClick={() =>
                  currentPage > 1 && handlePageChange(currentPage - 1)
                }
                className={`datatable-pagination-list-item-link ${
                  currentPage === 1 ? "disabled" : ""
                }`}
              >
                ‹
              </a>
            </li>
            {[...Array(totalPages)].map((_, pageIndex) => (
              <li
                key={pageIndex}
                className={`datatable-pagination-list-item ${
                  currentPage === pageIndex + 1 ? "datatable-active" : ""
                }`}
              >
                <a
                  onClick={() => handlePageChange(pageIndex + 1)}
                  className="datatable-pagination-list-item-link"
                >
                  {pageIndex + 1}
                </a>
              </li>
            ))}
            <li
              className={`datatable-pagination-list-item ${
                currentPage === totalPages
                  ? "datatable-hidden datatable-disabled"
                  : ""
              }`}
            >
              <a
                onClick={() =>
                  currentPage < totalPages && handlePageChange(currentPage + 1)
                }
                className={`datatable-pagination-list-item-link ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DataTable;
