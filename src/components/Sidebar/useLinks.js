import { SUPER_ADMIN_ROLE, USER_ROLE } from "../../constants/roles";

const useLinks = (role) => {
  const links = [
    {
      href: "/",
      title: "Dashboard",
      iconClassname: "bi bi-house",
    },
    {
      href: "/notifications",
      title: "Notifications",
      iconClassname: "bi bi-bell",
    },
    {
      href: "/orders",
      title: "Orders",
      iconClassname: "bi bi-cart3",
      disabled: role === USER_ROLE,
    },
    {
      href: "/statistics",
      title: "Statistics",
      iconClassname: "bi bi-pie-chart",
      disabled: role === USER_ROLE,
    },
    {
      href: "/users",
      title: "Users",
      iconClassname: "bi bi-people",
      disabled: role !== SUPER_ADMIN_ROLE,
    },
    {
      href: "/transactions",
      title: "Transactions",
      iconClassname: "bi bi-coin",
      disabled: role !== SUPER_ADMIN_ROLE,
    },
  ];

  return links;
};

export default useLinks;
