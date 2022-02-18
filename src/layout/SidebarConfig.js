import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import lockFill from "@iconify/icons-eva/lock-fill";
import personAddFill from "@iconify/icons-eva/person-add-fill";
import alertTriangleFill from "@iconify/icons-eva/alert-triangle-fill";
import { BatteryChargingFullOutlined, Copyright } from "@mui/icons-material";

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard/admin",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "Employee",
    path: "/dashboard/employee",
    icon: getIcon(peopleFill),
  },
  {
    title: "timesheet",
    path: "/dashboard/timesheet",
    icon: getIcon(fileTextFill),
  },
  {
    title: "Dashboard Karyawan",
    path: "/dashboard/karyawan",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "Delivery Performance",
    path: "/dashboard/devperform",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "Timesheet Collections",
    path: "/register",
    icon: getIcon(personAddFill),
  },
];

export default sidebarConfig;
