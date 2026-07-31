import React from "react";
import {
  Building2,
  Users,
  Wallet,
  TrendingUp,
  TrendingDown,
  Percent,
  ArrowUpRight,
  ArrowDownRight,
  AlertCircle,
  CircleDollarSign,
  BarChart3,
  UserPlus,
  BriefcaseBusiness,
} from "lucide-react";

const cards = [
  {
    title: "Total Companies",
    value: "24",
    subtitle: "19 active",
    icon: Building2,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Total Investors",
    value: "486",
    subtitle: "32 new this month",
    icon: Users,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Total Investment",
    value: "AED 12.8M",
    subtitle: "+8.4% this month",
    icon: Wallet,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Portfolio Value",
    value: "AED 14.2M",
    subtitle: "Current valuation",
    icon: CircleDollarSign,
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Total Profit",
    value: "AED 1.40M",
    subtitle: "Gross profit",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Total Loss",
    value: "AED 320K",
    subtitle: "Across companies",
    icon: TrendingDown,
    color: "from-red-500 to-rose-600",
  },
  {
    title: "Net Profit",
    value: "AED 1.08M",
    subtitle: "+12.6% YoY",
    icon: BarChart3,
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "ROI",
    value: "8.43%",
    subtitle: "Overall return",
    icon: Percent,
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Pending Withdrawals",
    value: "AED 245K",
    subtitle: "18 requests",
    icon: AlertCircle,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Active Investments",
    value: "732",
    subtitle: "Across all companies",
    icon: BriefcaseBusiness,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "New Investors",
    value: "32",
    subtitle: "This month",
    icon: UserPlus,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Monthly Profit",
    value: "AED 185K",
    subtitle: "+14.2%",
    icon: TrendingUp,
    color: "from-lime-500 to-green-600",
  },
];

const companies = [
  {
    name: "ABC Holdings",
    investors: 124,
    investment: "AED 2.40M",
    value: "AED 2.72M",
    profit: "AED 320K",
    loss: "AED 40K",
    roi: "11.6%",
    status: "Active",
  },
  {
    name: "XYZ Capital",
    investors: 86,
    investment: "AED 1.80M",
    value: "AED 1.99M",
    profit: "AED 210K",
    loss: "AED 25K",
    roi: "10.2%",
    status: "Active",
  },
  {
    name: "PQR Investments",
    investors: 156,
    investment: "AED 4.20M",
    value: "AED 4.56M",
    profit: "AED 450K",
    loss: "AED 90K",
    roi: "8.5%",
    status: "Active",
  },
  {
    name: "Global Ventures",
    investors: 72,
    investment: "AED 2.10M",
    value: "AED 2.25M",
    profit: "AED 180K",
    loss: "AED 30K",
    roi: "7.1%",
    status: "Active",
  },
];

const investors = [
  {
    name: "Ahmed Khan",
    company: "ABC Holdings",
    invested: "AED 450,000",
    current: "AED 512,000",
    profit: "AED 62,000",
    roi: "13.7%",
  },
  {
    name: "Mohammed Ali",
    company: "XYZ Capital",
    invested: "AED 320,000",
    current: "AED 351,000",
    profit: "AED 31,000",
    roi: "9.6%",
  },
  {
    name: "Sarah Wilson",
    company: "PQR Investments",
    invested: "AED 580,000",
    current: "AED 632,000",
    profit: "AED 52,000",
    roi: "8.9%",
  },
  {
    name: "John Smith",
    company: "Global Ventures",
    invested: "AED 250,000",
    current: "AED 267,000",
    profit: "AED 17,000",
    roi: "6.8%",
  },
];

export default function ParentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Parent Dashboard
          </h1>

          <p className="text-gray-500 mt-1">
            Overview of all companies, investors and investments
          </p>
        </div>

        <div className="flex gap-3">
          <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm">
            <option>All Companies</option>
            <option>ABC Holdings</option>
            <option>XYZ Capital</option>
            <option>PQR Investments</option>
          </select>

          <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
            <option>All Time</option>
          </select>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    {card.title}
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mt-2">
                    {card.value}
                  </h2>

                  <p className="text-xs text-gray-400 mt-2">
                    {card.subtitle}
                  </p>
                </div>

                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-r ${card.color}`}
                >
                  <Icon size={21} className="text-white" />
                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* PERFORMANCE */}
      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        {/* INVESTMENT GROWTH */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">

          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold text-gray-900">
                Investment Growth
              </h3>

              <p className="text-sm text-gray-500">
                Total investment vs portfolio value
              </p>
            </div>

            <BarChart3 size={20} className="text-gray-400" />
          </div>

          <div className="h-64 flex items-end gap-4">

            {[45, 52, 48, 65, 61, 72, 80, 76, 88, 92, 86, 100].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-end"
                >
                  <div
                    className="bg-gradient-to-t from-indigo-500 to-blue-400 rounded-t-lg"
                    style={{ height: `${height}%` }}
                  />

                  <span className="text-[10px] text-gray-400 text-center mt-2">
                    {index + 1}M
                  </span>
                </div>
              )
            )}

          </div>
        </div>

        {/* PROFIT LOSS */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">

          <h3 className="font-semibold text-gray-900">
            Profit & Loss
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Overall financial performance
          </p>

          <div className="mt-8 space-y-6">

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">
                  Profit
                </span>

                <span className="font-semibold text-green-600">
                  AED 1.40M
                </span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full">
                <div className="h-3 w-[82%] bg-green-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">
                  Loss
                </span>

                <span className="font-semibold text-red-500">
                  AED 320K
                </span>
              </div>

              <div className="h-3 bg-gray-100 rounded-full">
                <div className="h-3 w-[25%] bg-red-500 rounded-full" />
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-gray-500">
                Net Profit
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-1">
                AED 1.08M
              </h2>

              <div className="flex items-center gap-1 text-green-600 text-sm mt-2">
                <ArrowUpRight size={16} />
                12.6% compared to last year
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* COMPANY TABLE */}
      <div className="mt-8 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

        <div className="p-6 flex justify-between items-center">

          <div>
            <h3 className="font-semibold text-gray-900 text-lg">
              Company Performance
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Review financial performance of every company
            </p>
          </div>

          <button className="text-sm text-indigo-600 font-medium">
            View All
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 border-y">
              <tr>
                <th className="text-left px-6 py-4">Company</th>
                <th className="text-left px-6 py-4">Investors</th>
                <th className="text-left px-6 py-4">Investment</th>
                <th className="text-left px-6 py-4">Portfolio</th>
                <th className="text-left px-6 py-4">Profit</th>
                <th className="text-left px-6 py-4">Loss</th>
                <th className="text-left px-6 py-4">ROI</th>
                <th className="text-left px-6 py-4">Status</th>
              </tr>
            </thead>

            <tbody>

              {companies.map((company, index) => (
                <tr
                  key={index}
                  className="border-b last:border-0 hover:bg-gray-50"
                >

                  <td className="px-6 py-4 font-medium text-gray-900">
                    {company.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {company.investors}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {company.investment}
                  </td>

                  <td className="px-6 py-4">
                    {company.value}
                  </td>

                  <td className="px-6 py-4 text-green-600 font-medium">
                    +{company.profit}
                  </td>

                  <td className="px-6 py-4 text-red-500">
                    -{company.loss}
                  </td>

                  <td className="px-6 py-4 text-indigo-600 font-semibold">
                    {company.roi}
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs">
                      {company.status}
                    </span>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

      {/* INVESTOR PERFORMANCE */}
      <div className="mt-8 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">

        <div className="p-6">

          <h3 className="font-semibold text-gray-900 text-lg">
            Top Investors
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Investors with highest portfolio performance
          </p>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-50 border-y">

              <tr>
                <th className="text-left px-6 py-4">
                  Investor
                </th>

                <th className="text-left px-6 py-4">
                  Company
                </th>

                <th className="text-left px-6 py-4">
                  Invested
                </th>

                <th className="text-left px-6 py-4">
                  Current Value
                </th>

                <th className="text-left px-6 py-4">
                  Profit
                </th>

                <th className="text-left px-6 py-4">
                  ROI
                </th>
              </tr>

            </thead>

            <tbody>

              {investors.map((investor, index) => (

                <tr
                  key={index}
                  className="border-b last:border-0 hover:bg-gray-50"
                >

                  <td className="px-6 py-4 font-medium text-gray-900">
                    {investor.name}
                  </td>

                  <td className="px-6 py-4 text-gray-500">
                    {investor.company}
                  </td>

                  <td className="px-6 py-4">
                    {investor.invested}
                  </td>

                  <td className="px-6 py-4">
                    {investor.current}
                  </td>

                  <td className="px-6 py-4 text-green-600 font-medium">
                    +{investor.profit}
                  </td>

                  <td className="px-6 py-4 text-indigo-600 font-semibold">
                    {investor.roi}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}