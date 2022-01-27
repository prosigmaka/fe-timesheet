import { Navigate, useRoutes } from "react-router-dom";
import DashboardKaryawan from "./pages/karyawan/DashboardKaryawan";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import Employee from "./pages/admin/Employee";
import Timesheet from "./pages/admin/Timesheet";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard/admin",
      element: <DashboardAdmin />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    {
      path: "/",
      element: <DashboardAdmin />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },

    {
      path: "/dashboard/Employee",
      element: <Employee />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    {
      path: "/dashboard/timesheet",
      element: <Timesheet />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    {
      path: "/dashboard/karyawan",
      element: <DashboardKaryawan />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    // { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
