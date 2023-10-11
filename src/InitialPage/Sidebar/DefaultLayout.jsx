import React, { useState } from "react";

import Header from "./Header";
import Dashboard from "../../MainPage/Dashboard";
import { Scrollbars } from "react-custom-scrollbars";
import FeatherIcon from "feather-icons-react";

import { Link } from "react-router-dom";

import CategoryList from "../../MainPage/Product/CategoryList";
import BrandList from "../../MainPage/Product/BrandList";
import SubCategoryList from "../../MainPage/Product/SubCategoryTable";
import PrintBarcode from "../../MainPage/Product/PrintBarcode";
import ImportProduct from "../../MainPage/Product/ImportProduct";
import ProductList from "../../MainPage/Product/ProductList";
import SalesList from "../../MainPage/sales/saleslist";
import Sales from "../../MainPage/report/invoices";
import Supplier from "../../MainPage/report/supplier";
import UserList from "../../MainPage/People/UserList";
import SalesR from "../../MainPage/report/sales";
import EmailSettings from "../../MainPage/settings/email";
import Taxrates from "../../MainPage/settings/taxrates";

const DefaultLayout = () => {
  // const { match } = props;
  // const [isSideMenu, setSideMenu] = useState("");
  const [path, setPath] = useState("dashboard");

  // const location = useLocation();

  // if (location.pathname == "/") {
  //   setPath("dashboard");
  // }

  return (
    <>
      <div className="main-wrapper">
        <Header />

        <div className="sidebar " id="sidebar">
          <Scrollbars>
            <div className="slimScrollDiv">
              <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                  <ul>
                    <li className="submenu-open">
                      <h6 className="submenu-hdr">Main</h6>
                      <ul>
                        {/* dashboard */}
                        <li
                          className={path == "dashboard" ? "active" : ""}
                          onClick={() => setPath("dashboard")}
                        >
                          <a>
                            <FeatherIcon icon="grid" />
                            <span>Dashboard</span>
                          </a>
                        </li>
                        {/* <li className="submenu d-none">
                          <Link
                            to="#"
                            className={
                              pathname.includes("/dream-pos/application")
                                ? "subdrop active"
                                : "" || isSideMenu == "Application"
                                ? "subdrop active"
                                : ""
                            }
                            onClick={() =>
                              toggleSidebar(
                                isSideMenu == "Application" ? "" : "Application"
                              )
                            }
                          >
                            <FeatherIcon icon="smartphone" />
                            <span> Application</span>{" "}
                            <span className="menu-arrow" />
                          </Link>
                          {isSideMenu == "Application" ? (
                            <ul>
                              <li>
                                <Link
                                  to="/dream-pos/application/chat"
                                  className={
                                    pathname.includes("chat") ? "active" : ""
                                  }
                                >
                                  Chat
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/dream-pos/application/calendar"
                                  className={
                                    pathname.includes("calendar")
                                      ? "active"
                                      : ""
                                  }
                                >
                                  Calendar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/dream-pos/application/email"
                                  className={
                                    pathname.includes("email") ? "active" : ""
                                  }
                                >
                                  Email
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li> */}
                      </ul>
                    </li>

                    {/* products */}
                    <li className="submenu-open">
                      <h6 className="submenu-hdr">Products</h6>
                      <ul>
                        {/* product list */}
                        <li
                          className={path == "productlist" ? "active" : ""}
                          onClick={() => setPath("productlist")}
                        >
                          <a>
                            <FeatherIcon icon="box" />
                            <span>Products</span>
                          </a>
                        </li>

                        {/* product category list */}

                        <li
                          className={path == "categorylist" ? "active" : ""}
                          onClick={() => setPath("categorylist")}
                        >
                          <a>
                            <FeatherIcon icon="codepen" />
                            <span>Category</span>
                          </a>
                        </li>

                        {/* brands */}
                        <li
                          className={path == "brandlist" ? "active" : ""}
                          onClick={() => setPath("brandlist")}
                        >
                          <a>
                            {/* <i data-feather="tag" /> */}
                            <FeatherIcon icon="tag" />
                            <span>Brands</span>
                          </a>
                        </li>

                        {/* subcategory */}
                        <li
                          className={path == "subcategory" ? "active" : ""}
                          onClick={() => setPath("subcategory")}
                        >
                          <a>
                            <FeatherIcon icon="speaker" />
                            <span>Sub Category</span>
                          </a>
                        </li>

                        {/* barcode */}

                        <li
                          className={path == "printbarcode" ? "active" : ""}
                          onClick={() => setPath("printbarcode")}
                        >
                          <a>
                            <FeatherIcon icon="align-justify" />
                            <span>Print Barcode</span>
                          </a>
                        </li>

                        {/* import products */}

                        <li
                          className={path == "importproduct" ? "active" : ""}
                          onClick={() => setPath("importproduct")}
                        >
                          <a>
                            <FeatherIcon icon="minimize-2" />
                            <span>Import Products</span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* sales */}

                    <li className="submenu-open">
                      <h6 className="submenu-hdr">Sales</h6>
                      <ul>
                        <li
                          className={path == "saleslist" ? "active" : ""}
                          onClick={() => setPath("saleslist")}
                        >
                          <a>
                            <FeatherIcon icon="shopping-cart" />
                            <span>Sales</span>
                          </a>
                        </li>
                        {/* invoice */}
                        <li
                          className={path == "invoicereport" ? "active" : ""}
                          onClick={() => setPath("invoicereport")}
                        >
                          <a>
                            <FeatherIcon icon="shopping-cart" />
                            <span>Invoice</span>
                          </a>
                        </li>
                        {/* pos */}
                        <li className={path == "pos" ? "active" : ""}>
                          <Link to="/pos">
                            <FeatherIcon icon="shopping-cart" />
                            <span>POS</span>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* purchase */}
                    {/* <li className="submenu-open d-none">
                      <h6 className="submenu-hdr">Purchases</h6>
                      <ul>
                        <li
                          className={
                            pathname.includes("purchaselist-purchase")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            className={
                              pathname.includes("purchaselist-") ? "active" : ""
                            }
                            to="/dream-pos/purchase/purchaselist-purchase"
                          >
                            <FeatherIcon icon="shopping-bag" />
                            <span>Purchases</span>
                          </Link>
                        </li>
                        <li
                          className={
                            pathname.includes("importpurchase-purchase")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            className={
                              pathname.includes("importpurchase-")
                                ? "active"
                                : ""
                            }
                            to="/dream-pos/purchase/importpurchase-purchase"
                          >
                            <FeatherIcon icon="minimize-2" />
                            <span>Import Purchases</span>
                          </Link>
                        </li>
                        <li
                          className={
                            pathname.includes("purchaseorderreport")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/dream-pos/report/purchaseorderreport"
                            className={
                              pathname.includes("purchaseorderreport")
                                ? "active"
                                : ""
                            }
                          >
                            <FeatherIcon icon="file-minus" />
                            <span>Purchase Order</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/dream-pos/return/purchasereturnlist-return">
                            <FeatherIcon icon="refresh-cw" />
                            Purchase Return
                          </Link>
                        </li>
                      </ul>
                    </li> */}

                    {/* people */}
                    <li className="submenu-open">
                      <h6 className="submenu-hdr">Peoples</h6>
                      <ul>
                        {/* supplier */}
                        {/* <li
                          className={path == "supplierlist" ? "active" : ""}
                          onClick={() => setPath("supplierlist")}
                        >
                          <a>
                            <FeatherIcon icon="users" />
                            <span>Supplier</span>
                          </a>
                        </li> */}
                        {/* user */}
                        <li
                          className={path == "userlist" ? "active" : ""}
                          onClick={() => setPath("userlist")}
                        >
                          <a>
                            <FeatherIcon icon="user-check" />

                            <span>Users</span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* reports */}
                    <li className="submenu-open">
                      <h6 className="submenu-hdr">Reports</h6>
                      <ul>
                        <li
                          className={path == "salesreport" ? "active" : ""}
                          onClick={() => setPath("salesreport")}
                        >
                          <a>
                            <FeatherIcon icon="bar-chart-2" />
                            <span>Sales Report</span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* user management */}

                    <li className="submenu-open">
                      <h6 className="submenu-hdr">Settings</h6>
                      <ul>
                        <li
                          className={path == "settings" ? "active" : ""}
                          onClick={() => setPath("settings")}
                        >
                          <a>
                            <FeatherIcon icon="settings" />
                            <span>Email Settings</span>
                          </a>
                        </li>

                        <li
                          className={path == "taxreport" ? "active" : ""}
                          onClick={() => setPath("taxreport")}
                        >
                          <a>
                            <FeatherIcon icon="bar-chart" />
                            <span>Tax Rates </span>
                          </a>
                        </li>

                        {/* logout */}
                        <li>
                          <a>
                            <FeatherIcon icon="log-out" />
                            <span>Logout</span>{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>

        <div>{path == "dashboard" ? <Dashboard /> : <></>}</div>
        <div>{path == "productlist" ? <ProductList /> : <></>}</div>
        <div>{path == "categorylist" ? <CategoryList /> : <></>}</div>
        <div>{path == "brandlist" ? <BrandList /> : <></>}</div>
        <div>{path == "subcategory" ? <SubCategoryList /> : <></>}</div>
        <div>{path == "printbarcode" ? <PrintBarcode /> : <></>}</div>
        <div>{path == "importproduct" ? <ImportProduct /> : <></>}</div>

        {/* sales */}
        <div>{path == "saleslist" ? <SalesList /> : <></>}</div>
        <div>{path == "invoicereport" ? <Sales /> : <></>}</div>
        <div>{path == "supplierlist" ? <Supplier /> : <></>}</div>
        <div>{path == "userlist" ? <UserList /> : <></>}</div>
        <div>{path == "salesreport" ? <SalesR /> : <></>}</div>
        <div>{path == "settings" ? <EmailSettings /> : <></>}</div>
        <div>{path == "taxreport" ? <Taxrates /> : <></>}</div>
      </div>
      <div className="sidebar-overlay"></div>
    </>
  );
};

// export default withRouter(DefaultLayout);
export default DefaultLayout;
