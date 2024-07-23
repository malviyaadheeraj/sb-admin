import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

const Charts = () => {
  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4">Charts</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <a href="index.html">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">Charts</li>
      </ol>
      <div className="card mb-4">
        <div className="card-body">
          Chart.js is a third party plugin that is used to generate the charts
          in this template. The charts below have been customized - for further
          customization options, please visit the official
          <a target="_blank" href="https://www.chartjs.org/docs/latest/">
            Chart.js documentation
          </a>
          .
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-chart-area me-1"></i>
          Area Chart Example
        </div>
        <div className="card-body">
          {/* <canvas id="myAreaChart" width="100%" height="30"></canvas> */}
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
              },
            ]}
            width={1200}
            height={300}
          />
        </div>
        <div className="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-bar me-1"></i>
              Bar Chart Example
            </div>
            <div className="card-body">
              {/* <canvas id="myBarChart" width="100%" height="50"></canvas> */}
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: ["group A", "group B", "group C"],
                  },
                ]}
                series={[
                  { data: [4, 3, 5] },
                  { data: [1, 6, 3] },
                  { data: [2, 5, 6] },
                ]}
                width={600}
                height={300}
              />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-chart-pie me-1"></i>
              Pie Chart Example
            </div>
            <div className="card-body">
              {/* <canvas id="myPieChart" width="100%" height="50"></canvas> */}
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: "series A" },
                      { id: 1, value: 15, label: "series B" },
                      { id: 2, value: 20, label: "series C" },
                    ],
                  },
                ]}
                width={500}
                height={300}
              />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
