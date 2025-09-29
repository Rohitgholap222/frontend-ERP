import React, { useState } from "react";

interface Company {
  id: number;
  name: string;
  status: boolean; // true = Active, false = Deactive
  openings: number;
}

const Companies: React.FC = () => {
  const [companies] = useState<Company[]>([
    { id: 1, name: "TCS", status: true, openings: 10 },
    { id: 2, name: "Infosys", status: false, openings: 5 },
    { id: 3, name: "Wipro", status: true, openings: 8 },
    { id: 4, name: "Tech Mahindra", status: true, openings: 12 },
    { id: 5, name: "Accenture", status: false, openings: 6 },
  ]);

  const [filter, setFilter] = useState<"all" | "active" | "deactive">("all");

  // Apply filter
  const filteredCompanies = companies.filter((company) => {
    if (filter === "active") return company.status === true;
    if (filter === "deactive") return company.status === false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-10">
      <div className="bg-white shadow-md rounded-xl w-full max-w-5xl p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">
            Companies Visited for Placement & Internship
          </h2>

          {/* Dropdown Filter */}
          <div className="flex items-center space-x-2">
            <label className="font-medium text-gray-700">Filter:</label>
            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value as "all" | "active" | "deactive")
              }
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="deactive">Deactive</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-5 border-b text-gray-700">#</th>
                <th className="py-3 px-5 border-b text-gray-700">
                  Company Name
                </th>
                <th className="py-3 px-5 border-b text-gray-700">Status</th>
                <th className="py-3 px-5 border-b text-gray-700">Openings</th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.map((company, index) => (
                <tr
                  key={company.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-5 border-b">{index + 1}</td>
                  <td className="py-3 px-5 border-b font-medium text-gray-800">
                    {company.name}
                  </td>
                  <td className="py-3 px-5 border-b">
                    {company.status ? (
                      <span className="text-green-600 font-semibold">
                        Active
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        Deactive
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-5 border-b">
                    {company.status ? (
                      <span className="text-gray-800">
                        {company.openings}
                      </span>
                    ) : (
                      <span className="text-gray-400 italic">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
              {filteredCompanies.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="py-4 text-center text-gray-500 italic"
                  >
                    No companies found for this filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-6 text-center">
          *Status is updated by the company based on their availability for the
          college drive.
        </p>
      </div>
    </div>
  );
};

export default Companies;
