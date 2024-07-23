import React, { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

const Sidebar = () => {
  const { setCurrentTab } = useContext(MenuContext);

  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Core</div>
          <div className="nav-link" onClick={() => setCurrentTab("dashboard")}>
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </div>
          <div className="sb-sidenav-menu-heading">Interface</div>
          <a
            className="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-columns"></i>
            </div>
            Layouts
            <div className="sb-sidenav-collapse-arrow">
              <i className="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            className="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav className="sb-sidenav-menu-nested nav">
              <a className="nav-link" href="#">
                Static Navigation
              </a>
              <a className="nav-link" href="#">
                Light Sidenav
              </a>
            </nav>
          </div>
          <a
            className="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-book-open"></i>
            </div>
            Pages
            <div className="sb-sidenav-collapse-arrow">
              <i className="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            className="collapse"
            id="collapsePages"
            aria-labelledby="headingTwo"
            data-bs-parent="#sidenavAccordion"
          >
            <nav
              className="sb-sidenav-menu-nested nav accordion"
              id="sidenavAccordionPages"
            >
              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#pagesCollapseAuth"
                aria-expanded="false"
                aria-controls="pagesCollapseAuth"
              >
                Authentication
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                className="collapse"
                id="pagesCollapseAuth"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordionPages"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                  <a className="nav-link" href="#">
                    Register
                  </a>
                  <a className="nav-link" href="#">
                    Forgot Password
                  </a>
                </nav>
              </div>
              <a
                className="nav-link collapsed"
                href="#"
                data-bs-toggle="collapse"
                data-bs-target="#pagesCollapseError"
                aria-expanded="false"
                aria-controls="pagesCollapseError"
              >
                Error
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                className="collapse"
                id="pagesCollapseError"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordionPages"
              >
                <nav className="sb-sidenav-menu-nested nav">
                  <a className="nav-link" href="#">
                    401 Page
                  </a>
                  <a className="nav-link" href="#">
                    404 Page
                  </a>
                  <a className="nav-link" href="#">
                    500 Page
                  </a>
                </nav>
              </div>
            </nav>
          </div>
          <div className="sb-sidenav-menu-heading">Addons</div>
          <div
            className="nav-link cursor-pointer"
            onClick={() => setCurrentTab("charts")}
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-chart-area"></i>
            </div>
            Charts
          </div>
          <div
            className="nav-link cursor-pointer"
            onClick={() => setCurrentTab("tables")}
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-table"></i>
            </div>
            Tables
          </div>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  );
};

export default Sidebar;
