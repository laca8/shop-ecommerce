import React from "react";
import { useSelector } from "react-redux";
const NavDahboard = () => {
  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-smile icon"></i> AdminSite
      </a>
      <ul className="side-menu">
        <li>
          <a href="#" className="active">
            <i className="bx bxs-dashboard icon"></i> Dashboard
          </a>
        </li>
        <li className="divider" data-text="main">
          Main
        </li>
        <li>
          <a href="/admin/userList" style={{ textAlign: "center" }}>
            <i className="fa-solid fa-users fa-1x"></i> Users
          </a>
        </li>
        <li>
          <a href="/admin/products">
            <i class="fa-solid fa-basket-shopping"></i> Products
          </a>
        </li>
        <li>
          <a href="/admin/orders">
            <i class="fa-brands fa-shopify"></i> Orders
          </a>
        </li>
        <li className="divider" data-text="table and forms">
          Table and forms
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-table"></i> Tables
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-file-dashed-line"></i> Forms{" "}
            <i className="bx bx-chevron-right icon-right"></i>
          </a>
          <ul className="side-dropdown">
            <li>
              <a href="#">Basic</a>
            </li>
            <li>
              <a href="#">Select</a>
            </li>
            <li>
              <a href="#">Checkbox</a>
            </li>
            <li>
              <a href="#">Radio</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="ads">
        <div className="wrapper">
          <a href="#" className="btn-upgrade">
            Upgrade
          </a>
          <p>
            Become a <span>PRO</span> member and enjoy <span>All Features</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NavDahboard;
