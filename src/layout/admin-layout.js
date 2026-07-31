import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Building2,
  Users,
  Wallet,
  TrendingUp,
  DollarSign,
  ArrowLeftRight,
  FileBarChart,
  Bell,
  Settings,
  ChevronDown,
  Plus,
  BarChart3,
  UserCog,
  ShieldCheck,
  UserPlus,
  BriefcaseBusiness,
  Receipt,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [openMenus, setOpenMenus] = useState({
    companies: true,
    investors: false,
    investments: false,
    financials: false,
    transactions: false,
    reports: false,
    settings: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const mainMenu = [
    {
      name: "Dashboard",
      path: "/",
      icon: <Home size={20} />,
    },
  ];

  const menuGroups = [
    {
      key: "companies",
      name: "Companies",
      icon: <Building2 size={20} />,
      children: [
        {
          name: "All Companies",
          path: "/companies",
          icon: <Building2 size={17} />,
        },
        {
          name: "Add Company",
          path: "/companies/add",
          icon: <Plus size={17} />,
        },
        {
          name: "Company Performance",
          path: "/companies/performance",
          icon: <BarChart3 size={17} />,
        },
      ],
    },

    {
      key: "investors",
      name: "Investors",
      icon: <Users size={20} />,
      children: [
        {
          name: "All Investors",
          path: "/investors",
          icon: <Users size={17} />,
        },
        {
          name: "Add Investor",
          path: "/investors/add",
          icon: <UserPlus size={17} />,
        },
        {
          name: "Investor Performance",
          path: "/investors/performance",
          icon: <TrendingUp size={17} />,
        },
      ],
    },

    {
      key: "investments",
      name: "Investments",
      icon: <Wallet size={20} />,
      children: [
        {
          name: "All Investments",
          path: "/investments",
          icon: <Wallet size={17} />,
        },
        {
          name: "New Investment",
          path: "/investments/add",
          icon: <Plus size={17} />,
        },
        {
          name: "Active Investments",
          path: "/investments/active",
          icon: <BriefcaseBusiness size={17} />,
        },
        {
          name: "Completed Investments",
          path: "/investments/completed",
          icon: <FileBarChart size={17} />,
        },
      ],
    },

    {
      key: "financials",
      name: "Financials",
      icon: <DollarSign size={20} />,
      children: [
        {
          name: "Profit & Loss",
          path: "/financials/profit-loss",
          icon: <TrendingUp size={17} />,
        },
        {
          name: "Revenue",
          path: "/financials/revenue",
          icon: <DollarSign size={17} />,
        },
        {
          name: "Expenses",
          path: "/financials/expenses",
          icon: <Receipt size={17} />,
        },
        {
          name: "Cash Flow",
          path: "/financials/cash-flow",
          icon: <ArrowLeftRight size={17} />,
        },
      ],
    },

    {
      key: "transactions",
      name: "Transactions",
      icon: <ArrowLeftRight size={20} />,
      children: [
        {
          name: "All Transactions",
          path: "/transactions",
          icon: <ArrowLeftRight size={17} />,
        },
        {
          name: "Deposits",
          path: "/transactions/deposits",
          icon: <DollarSign size={17} />,
        },
        {
          name: "Withdrawals",
          path: "/transactions/withdrawals",
          icon: <ArrowLeftRight size={17} />,
        },
      ],
    },

    {
      key: "reports",
      name: "Reports",
      icon: <FileBarChart size={20} />,
      children: [
        {
          name: "Company Reports",
          path: "/reports/companies",
          icon: <Building2 size={17} />,
        },
        {
          name: "Investor Reports",
          path: "/reports/investors",
          icon: <Users size={17} />,
        },
        {
          name: "Investment Reports",
          path: "/reports/investments",
          icon: <Wallet size={17} />,
        },
        {
          name: "Financial Reports",
          path: "/reports/financial",
          icon: <BarChart3 size={17} />,
        },
      ],
    },

    {
      key: "settings",
      name: "Settings",
      icon: <Settings size={20} />,
      children: [
        {
          name: "Users & Roles",
          path: "/settings/users",
          icon: <UserCog size={17} />,
        },
        {
          name: "Permissions",
          path: "/settings/permissions",
          icon: <ShieldCheck size={17} />,
        },
        {
          name: "Profile",
          path: "/settings/profile",
          icon: <Users size={17} />,
        },
        {
          name: "System Settings",
          path: "/settings/system",
          icon: <Settings size={17} />,
        },
      ],
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">

      {/* ================= SIDEBAR ================= */}

      <div
        className={`
          fixed md:static top-0 left-0 h-full w-72
          bg-white border-r border-gray-200 shadow-sm
          p-5 transform transition duration-300 z-50
          overflow-y-auto

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >

        {/* LOGO */}

        <div className="mb-8 px-2">
          <h1 className="text-2xl font-bold text-blue-600">
            Akter Admin
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Investment Management
          </p>
        </div>

        {/* MAIN MENU */}

        <div className="mb-5">

          <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">
            Main
          </p>

          <ul className="space-y-1">

            {mainMenu.map((item, index) => (
              <li key={index}>

                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 px-4 py-3 rounded-xl
                    font-medium transition-all duration-200

                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600 shadow-sm border border-blue-100"
                        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                    }
                    `
                  }
                >
                  {item.icon}
                  {item.name}
                </NavLink>

              </li>
            ))}

          </ul>

        </div>

        {/* MANAGEMENT */}

        <div>

          <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">
            Management
          </p>

          <div className="space-y-1">

            {menuGroups.map((group) => (

              <div key={group.key}>

                {/* GROUP BUTTON */}

                <button
                  onClick={() => toggleMenu(group.key)}
                  className="
                    w-full flex items-center justify-between
                    px-4 py-3 rounded-xl
                    text-gray-600 font-medium
                    hover:bg-gray-100 hover:text-blue-600
                    transition-all
                  "
                >

                  <div className="flex items-center gap-3">

                    {group.icon}

                    <span>
                      {group.name}
                    </span>

                  </div>

                  <ChevronDown
                    size={17}
                    className={`
                      transition-transform duration-200
                      ${
                        openMenus[group.key]
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />

                </button>

                {/* SUB MENU */}

                {openMenus[group.key] && (

                  <div className="ml-5 pl-4 border-l border-gray-200 space-y-1 mt-1 mb-2">

                    {group.children.map((child, index) => (

                      <NavLink
                        key={index}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `
                          flex items-center gap-3
                          px-3 py-2.5 rounded-lg
                          text-sm transition-all

                          ${
                            isActive
                              ? "bg-blue-50 text-blue-600 font-medium"
                              : "text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                          }
                          `
                        }
                      >

                        {child.icon}

                        {child.name}

                      </NavLink>

                    ))}

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* NOTIFICATIONS */}

        <div className="mt-6 pt-5 border-t border-gray-100">

          <NavLink
            to="/notifications"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `
              flex items-center gap-3 px-4 py-3 rounded-xl
              font-medium transition-all

              ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }
              `
            }
          >

            <Bell size={20} />

            Notifications

            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              5
            </span>

          </NavLink>

        </div>

      </div>

      {/* ================= MOBILE OVERLAY ================= */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ================= MAIN AREA ================= */}

      <div className="flex-1 flex flex-col min-w-0">

        {/* TOP BAR */}

        <div className="bg-white border-b border-gray-200 shadow-sm p-4 flex items-center justify-between">

          {/* MOBILE BUTTON */}

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* TITLE */}

          <div className="hidden md:block">

            <h2 className="text-xl font-semibold text-gray-800">
              Investment Management
            </h2>

            <p className="text-xs text-gray-400">
              Parent Administration Panel
            </p>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">

            <div className="relative cursor-pointer">

              <Bell
                size={20}
                className="text-gray-500"
              />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                5
              </span>

            </div>

            <div className="flex items-center gap-2">

              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                A
              </div>

              <div className="hidden sm:block">

                <p className="text-sm font-medium text-gray-800">
                  Admin
                </p>

                <p className="text-xs text-gray-400">
                  Parent Admin
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* PAGE CONTENT */}

        <div className="p-6 overflow-y-auto">
          {children}
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;