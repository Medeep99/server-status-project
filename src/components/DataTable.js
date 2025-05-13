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

  const requiredDataCenter = [
    tableData["Singapore"],
    tableData["India Mumbai"],
    tableData["India Chennai"],
    tableData["Emirates"],
    tableData["US Dallas"],
  ]
 console.log(requiredDataCenter);
  return (
    <div className="bg-gray-100 p-6">
      <section className="container mx-auto">
        <div className="overflow-hidden rounded-xl shadow-md bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left odd:bg-white even:bg-gray-50 ">
              <thead className="text-xs font-semibold text-gray-700 bg-gray-200 uppercase border-none shadow-sm">
                <tr className="border-none">
                  <th className="px-6 py-4">Data Centers</th>
                  <th className="px-6 py-4">Capacity</th>
                  <th className="px-6 py-4">Load</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                <tr className="hover:bg-gray-100 ">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div>
                        <p className="font-medium text-gray-900">Singapore</p>
                        <p className="text-sm text-gray-500">Main</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 font-semibold text-gray-700">
                    {tableData["Singapore"]
                      ? tableData["Singapore"].capacity
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold ${decideColor(
                        tableData["Singapore"]
                      )}`}
                    >
                      {tableData["Singapore"]
                        ? tableData["Singapore"].load
                        : "N/A"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold ${checkStatus(
                        tableData["Singapore"]
                      )}`}
                    >
                      {checkAvailability(tableData["Singapore"])
                        ? "Online"
                        : "Offline"}
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div>
                        <p className="font-medium text-gray-900">India</p>
                        <p className="text-sm text-gray-500">Mumbai</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 font-semibold text-gray-700">
                    {tableData["India Mumbai"]
                      ? tableData["India Mumbai"].capacity
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold ${decideColor(
                        tableData["India Mumbai"]
                      )}`}
                    >
                      {tableData["India Mumbai"]
                        ? tableData["India Mumbai"].load
                        : "N/A"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-green-800 bg-green-300">
                      {checkAvailability(tableData["India Mumbai"])
                        ? "Online"
                        : "Offline"}
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div>
                        <p className="font-medium text-gray-900">India</p>
                        <p className="text-sm text-gray-500">Chennai</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 font-semibold text-gray-700">
                    {tableData["India Chennai"]
                      ? tableData["India Chennai"].capacity
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold ${decideColor(
                        tableData["India Chennai"]
                      )}`}
                    >
                      {tableData["India Chennai"]
                        ? tableData["India Chennai"].load
                        : "N/A"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-green-800 bg-green-300">
                      {checkAvailability(tableData["India Chennai"])
                        ? "Online"
                        : "Offline"}
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div>
                        <p className="font-medium text-gray-900">Emirates</p>
                        <p className="text-sm text-gray-500">Main</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 font-semibold text-gray-700">
                    {tableData["Emirates"]
                      ? tableData["Emirates"].capacity
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold ${decideColor(
                        tableData["Emirates"]
                      )}`}
                    >
                      {tableData["Emirates"]
                        ? tableData["Emirates"].load
                        : "N/A"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-green-800 bg-green-300">
                      {checkAvailability(tableData["Emirates"])
                        ? "Online"
                        : "Offline"}
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div>
                        <p className="font-medium text-gray-900">US</p>
                        <p className="text-sm text-gray-500">Dallas</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 font-semibold text-gray-700">
                    {tableData["US Dallas"]
                      ? tableData["US Dallas"].capacity
                      : "N/A"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold ${decideColor(
                        tableData["US Dallas"]
                      )}`}
                    >
                      {tableData["US Dallas"]
                        ? tableData["US Dallas"].load
                        : "N/A"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-green-800 bg-green-300">
                      {checkAvailability(tableData["US Dallas"])
                        ? "Online"
                        : "Offline"}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
