import React from "react";

const Overview = () => {
  return (
    <div>
      {/* head section */}
      <section className="text-2xl flex justify-around text-slate-800">
        <div className="p-3 font-semibold">
          <h4>Project Information</h4>
        </div>
        <div className="">
          <button className="btn btn-success font-semibold">
            Crate New Project
          </button>
        </div>
      </section>
      {/* head section end */}
      <section>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="p-4 ">
                    <div class="flex items-center">Check</div>
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Project name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Project Manager
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Duration
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    HR Management
                  </th>
                  <td class="px-6 py-4">Anderson</td>
                  <td class="px-6 py-4">Software</td>
                  <td class="px-6 py-4">
                    <div className="flex flex-col">
                      <span>01/01/24 </span>
                      <span>06/01/24 </span>
                    </div>
                  </td>
                  <td class="px-6 py-4">Pending</td>
                  <td class="px-6 py-4">
                    <div className="flex gap-3">
                      <button>vi</button>
                      <button>ed</button>
                      <button>del</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        ;
      </section>
    </div>
  );
};

export default Overview;
