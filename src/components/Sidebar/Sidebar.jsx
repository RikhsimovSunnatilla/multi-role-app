import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import styles from "./Sidebar.module.css";

const links = [
  {
    href: "/",
    title: "Dashboard",
    iconClassname: "bi bi-house",
  },
  {
    href: "/transactions",
    title: "Transactions",
    iconClassname: "bi bi-coin",
  },
  {
    href: "/orders",
    title: "Orders",
    iconClassname: "bi bi-cart3",
  },
  {
    href: "/users",
    title: "Users",
    iconClassname: "bi bi-people",
  },
  {
    href: "/statistics",
    title: "Statistics",
    iconClassname: "bi bi-pie-chart",
  },
  {
    href: "/notifications",
    title: "Notifications",
    iconClassname: "bi bi-bell",
  },
];

export const Sidebar = () => {
  return (
    <div className={cx(styles.container, "border-end")}>
      <div className="pt-3 pb-1 px-3">
        <h6>Role: Super Admin</h6>
      </div>
      <hr className="text-black-50" />

      <div className="d-flex flex-column bg-white ">
        {links.map((link) => (
          <Link to={link.href} key={link.href} className={cx(styles.link, "d-flex align-items-center py-2 px-3")}>
            <i className={cx(link.iconClassname, "fs-5 text-secondary")} />
            <span className={cx(styles.linkText)}>{link.title}</span>
          </Link>
        ))}
      </div>
      <hr className="text-black-50" />
      <div className={cx(styles.link, "d-flex align-items-center py-2 px-3")}>
        <i className="bi bi-box-arrow-right fs-5 text-secondary" />
        <span className={cx(styles.linkText)}>Log out</span>
      </div>
    </div>
  );
};
