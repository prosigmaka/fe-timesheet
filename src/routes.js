import { Navigate, useRoutes } from "react-router-dom";
// layouts
// import DashboardAdmin from "./pages/admin/DashboardAdmin";
import DashboardKaryawan from "./pages/karyawan/DashboardKaryawan";
// import Employee from "./pages/admin/Employee";
// import Timesheet from "./pages/admin/Timesheet";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      // path: "/dashboard/admin",
      // element: <DashboardAdmin />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    {
      // path: "/",
      // element: <DashboardAdmin />,
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
      //   { path: 'login', element: <Login /> },
      //   { path: 'register', element: <Register /> },
      //   { path: '404', element: <NotFound /> },
      //   { path: '/', element: <Navigate to="/dashboard" /> },
      //   { path: '*', element: <Navigate to="/404" /> }
      // ]
    },
    {
      // path: "/dashboard/Employee",
      // element: <Employee />,
      // children: [
      //   { element: <Navigate to="/dashboard/app" replace /> },
      //   { path: 'app', element: <DashboardApp /> },
      //   { path: 'user', element: <User /> },
      //   { path: 'products', element: <Products /> },
      //   { path: 'blog', element: <Blog /> }
      // ]
    },
    {
      // path: "/dashboard/timesheet",
      // element: <Timesheet />,
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
