import React from "react";
import userList from "../../../../usersList";
import DataTable from "./DataTable";

const Tables = () => {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Tables</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <a href="index.html">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">Tables</li>
      </ol>
      <div className="card mb-4">
        <div className="card-body">
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the{" "}
          <a target="_blank" href="https://datatables.net/">
            official DataTables documentation
          </a>
          .
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-table me-1"></i>
          DataTable Example
        </div>
        <DataTable userList={userList} />
      </div>
    </div>
  );
};

export default Tables;
