import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";

export default function DataTable(props) {
  const { tableData } = props;

  // Function to decide the color based on the datacenter's load and capacity
  const decideColor = (datacenter) => {
    if (!checkAvailability(datacenter)) {
      return "bg-red-100 text-red-800";
    } else {
      if (datacenter.load === "low") {
        return "bg-green-300 text-green-800";
      } else if (datacenter.load === "medium") {
        return "bg-yellow-300 text-yellow-800";
      } else if (datacenter.load === "high") {
        return "bg-orange-100 text-orange-800";
      } else if (datacenter.load === "idle") {
        return "bg-blue-100 text-blue-800";
      }
    }
  };
  // Function to check if the datacenter is available
  const checkAvailability = (datacenter) => {
    if (
      datacenter.capacity === null ||
      datacenter.capacity === "" ||
      datacenter.load === null ||
      datacenter.load === "" ||
      datacenter === null ||
      datacenter === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  // Function to check the status of the datacenter
  const checkStatus = (datacenter) => {
    if (checkAvailability(datacenter)) {
      return "text-green-800 bg-green-300";
    } else {
      return "text-red-800 bg-red-300";
    }
  };

  return (
    <div className="bg-gray-100 p-6">
  <section className="container mx-auto">
    <div className="overflow-hidden rounded-xl shadow-md bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left odd:bg-white even:bg-gray-50">
          <thead className="text-xs font-semibold text-gray-700 bg-gray-200 uppercase border-none shadow-sm">
            <tr className="border-none">
              <th className="px-6 py-4">Data Centers</th>
              <th className="px-6 py-4">Capacity</th>
              <th className="px-6 py-4">Load</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {["Singapore", "India Mumbai", "India Chennai", "Emirates", "US Dallas"].map((location) => (
              <tr key={location} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div>
                      <p className="font-medium text-gray-900">{location.split(" ")[0]}</p>
                      {location.includes(" ") && (
                        <p className="text-sm text-gray-500">{location.split(" ").slice(1).join(" ")}</p>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-8 py-4 font-semibold text-gray-700">
                  {tableData[location]?.capacity || "N/A"}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold ${decideColor(
                      tableData[location]
                    )}`}
                  >
                    {tableData[location]?.load || "N/A"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold ${
                      checkAvailability(tableData[location])
                        ? "text-green-800 bg-green-300"
                        : "text-red-800 bg-red-300"
                    }`}
                  >
                    {checkAvailability(tableData[location]) ? "Online" : "Offline"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
</div>
  );
}
