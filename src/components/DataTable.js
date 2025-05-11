import React from "react";

export default function DataTable() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
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
                  <td className="px-6 py-4 font-semibold text-gray-700">
                    Full
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-gray-800 bg-gray-100">
                      Idle
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-green-800 bg-green-300">
                      Online
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
                  <td className="px-6 py-4 font-semibold text-gray-700">
                    Full
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-green-800 bg-green-100">
                      Low
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-green-800 bg-green-300">
                      Online
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
                  <td className="px-6 py-4 font-semibold text-gray-700">
                    Full
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-orange-800 bg-orange-100">
                      Medium
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-green-800 bg-green-300">
                      Online
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
                  <td className="px-6 py-4 font-semibold text-gray-700">
                    Full
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-red-800 bg-red-100">
                      High
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-green-800 bg-green-300">
                      Online
                    </span>
                  </td>
                </tr>
               
                {/* You can add more <tr> rows here for additional data */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
