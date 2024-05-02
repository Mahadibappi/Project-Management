import { BsEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/ProjectData");
        setProjectData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);
  return (
    <div className="max-w-full mx-auto p-6">
      <div>
        <h2 className="text-2xl text-black font-semibold mb-4">Dashboard</h2>
        <div className="flex flex-wrap gap-4 sm:flex-col lg:flex-row text-slate-200">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 sm:p-8 xl:p-20 rounded-md sm:w-1/2 lg:w-auto transform transition-transform hover:scale-105">
            <span className="text-4xl font-bold block">5</span>
            <p>Projects</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 sm:p-8 xl:p-20 rounded-md sm:w-1/2 lg:w-auto transform transition-transform hover:scale-105">
            <span className="text-4xl font-bold block">1</span>
            <p>Completed</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 sm:p-8 xl:p-20 rounded-md sm:w-1/2 lg:w-auto transform transition-transform hover:scale-105">
            <span className="text-4xl font-bold block">0</span>
            <p>Pending</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 sm:p-8 xl:p-20 rounded-md sm:w-1/2 lg:w-auto transform transition-transform hover:scale-105">
            <span className="text-4xl font-bold block">4</span>
            <p>Categories</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        {" "}
        <div>
          {/* head section */}
          <section className="text-2xl flex justify-between text-slate-800">
            <div className="p-3 font-semibold">
              <h4>Project Information</h4>
            </div>
          </section>
          {/* head section end */}
          <section>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-3 pt-2">
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
                    {projectData?.map((project, index) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700  ">
                        <td class="w-4 p-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              for="checkbox-table-search-1"
                              class="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <th
                          scope="row"
                          class="px-4 py-4 whitespace-nowrap text-gray-300"
                        >
                          {project.projectName}
                        </th>
                        <td class="px-4 py-4">{project.managerName}</td>
                        <td class="px-4 py-4">{project.category}</td>
                        <td class="px-4 py-4">
                          <div className="flex flex-col">
                            <span>{project.startDate} To</span>
                            <span>{project.endDate} </span>
                          </div>
                        </td>
                        <td class="p6-6 py-4">{project.status}</td>
                        <td class="px-6 py-4">
                          <div className="flex gap-3 ">
                            <Link to="/detail">
                              <button className="mt-2">
                                <BsEyeFill className="w-6 h-6" />
                              </button>
                            </Link>
                            <Link to="/editProject">
                              <button className="mt-2">
                                <FaEdit className="w-5 h-6" />
                              </button>
                            </Link>
                            <button>
                              <MdDelete className="w-5 h-6 text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            ;
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
