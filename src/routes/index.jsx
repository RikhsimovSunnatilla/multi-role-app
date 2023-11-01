import React, { useContext } from "react";
import { Routes as DOMRoutes, Route } from "react-router-dom";

import { AuthLayout } from "../layouts/AuthLayout/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout/DashboardLayout";
import { SignIn as SignInPage } from "../pages/SignIn/SignIn";
import { Error as ErrorPage } from "../pages/Error/Error";

import { AuthContext } from "../context/auth";
import { useCheckAuth } from "../hooks/useCheckAuth";

export const Routes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  useCheckAuth();

  const routes = [
    {
      path: "/",
      element: <h4>Dashboard</h4>,
    },
    {
      path: "/transactions",
      element: <h4>Transactions</h4>,
    },
    {
      path: "/orders",
      element: <h4>Orders</h4>,
    },
    {
      path: "/users",
      element: <h4>Users</h4>,
    },
    {
      path: "/statistics",
      element: <h4>Statistics</h4>,
    },
    {
      path: "/notifications",
      element: <h4>Notifications</h4>,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return (
    <>
      {isAuthenticated ? (
        <DashboardLayout>
          <DOMRoutes>
            {routes.map((route) => (
              <Route path={route.path} element={route.element} key={route.path} />
            ))}
          </DOMRoutes>
        </DashboardLayout>
      ) : (
        <AuthLayout>
          <DOMRoutes>
            <Route path="/" element={<SignInPage />} />
            <Route path="*" element={<ErrorPage />} />
          </DOMRoutes>
        </AuthLayout>
      )}
    </>
  );
};
