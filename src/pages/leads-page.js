import React, { useMemo, useState } from "react";
import {
  Upload,
  Search,
  Send,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function LeadsPage() {
  const [search, setSearch] = useState("");

  const leads = [
    {
      id: 1,
      name: "Ahmed Ali",
      phone: "+971501234567",
      email: "ahmed@gmail.com",
      status: "Interested",
    },
    {
      id: 2,
      name: "John Smith",
      phone: "+971523456789",
      email: "john@gmail.com",
      status: "Pending",
    },
    {
      id: 3,
      name: "Ali Hassan",
      phone: "+971555555555",
      email: "ali@gmail.com",
      status: "No Reply",
    },
    {
      id: 4,
      name: "Sara Khan",
      phone: "+971588888888",
      email: "sara@gmail.com",
      status: "Follow Up",
    },
    {
      id: 5,
      name: "Mohammed",
      phone: "+971566666666",
      email: "mohd@gmail.com",
      status: "Closed",
    },
    {
      id: 6,
      name: "David",
      phone: "+971577777777",
      email: "david@gmail.com",
      status: "Interested",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 5;

  const filteredData = useMemo(() => {
    return leads.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.phone.includes(search)
    );
  }, [search]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const currentRows = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const badgeColor = (status) => {
    switch (status) {
      case "Interested":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Follow Up":
        return "bg-blue-100 text-blue-700";

      case "No Reply":
        return "bg-red-100 text-red-700";

      case "Closed":
        return "bg-gray-200 text-gray-700";

      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Leads Management
          </h2>

          <p className="text-gray-500">
            Manage all customer leads
          </p>
        </div>

        <div className="flex flex-wrap gap-3">

          <label className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg cursor-pointer">
            <Upload size={18} />
            Upload Excel
            <input
              type="file"
              className="hidden"
              accept=".xlsx,.xls,.csv"
            />
          </label>

        </div>

      </div>

      {/* Search */}

      <div className="relative mb-5">

        <Search
          className="absolute left-3 top-3 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search by Name or Phone..."
          className="w-full border rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full border-collapse">

          <thead>

            <tr className="bg-gray-100 text-gray-700">

              <th className="p-4 text-left">#</th>

              <th className="p-4 text-left">Customer</th>

              <th className="p-4 text-left">Phone</th>

              <th className="p-4 text-left">Email</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {currentRows.map((lead, index) => (

              <tr
                key={lead.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">
                  {(currentPage - 1) * rowsPerPage + index + 1}
                </td>

                <td className="p-4 font-medium">
                  {lead.name}
                </td>

                <td className="p-4">
                  {lead.phone}
                </td>

                <td className="p-4">
                  {lead.email}
                </td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor(
                      lead.status
                    )}`}
                  >
                    {lead.status}
                  </span>

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-2">

                    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg flex items-center gap-2">
                      <Send size={16} />
                      Send
                    </button>

                    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg flex items-center gap-2">
                      <Trash2 size={16} />
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Pagination */}

      <div className="flex justify-between items-center mt-6">

        <p className="text-gray-500">
          Showing {currentRows.length} of {filteredData.length} Leads
        </p>

        <div className="flex gap-2">

          <button
            disabled={currentPage === 1}
            onClick={() =>
              setCurrentPage((p) => Math.max(p - 1, 1))
            }
            className="border rounded-lg px-3 py-2 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft size={18} />
          </button>

          <span className="px-4 py-2 border rounded-lg">
            {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((p) =>
                Math.min(p + 1, totalPages)
              )
            }
            className="border rounded-lg px-3 py-2 hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}