import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import { UserContext } from "../../context/user";
import useLinks from "./useLinks";
import useLogOut from "../../hooks/useLogOut";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  const { logOut } = useLogOut();
  const { role } = useContext(UserContext);
  const links = useLinks(role);

  return (
    <div className={cx(styles.container, "border-end")}>
      <div className="pt-3 pb-1 px-3">
        <h6>
          Role:
          <span className="text-capitalize"> {role}</span>
        </h6>
      </div>

      <hr className="text-black-50" />

      <div className="d-flex flex-column bg-white ">
        {links.map((item) => (
          <Link
            to={item.href}
            key={item.href}
            className={cx(styles.link, "d-flex align-items-center py-2 px-3", { [styles.disabled]: item.disabled })}>
            <i className={cx(item.iconClassname, "fs-5 text-secondary")} />
            <span className={cx(styles.linkText, "text-dark")}>{item.title}</span>
          </Link>
        ))}
      </div>

      <hr className="text-black-50" />

      <div onClick={logOut} role="button" className={cx(styles.link, "d-flex align-items-center py-2 px-3")}>
        <i className="bi bi-box-arrow-right fs-5 text-secondary" />
        <span className={cx(styles.linkText, "text-dark")}>Log out</span>
      </div>
    </div>
  );
};
