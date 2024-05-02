import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const ProjectDetail = () => {
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
    <div class=" max-w-lg mx-auto text-slate-800 ">
      <div className="flex  gap-7 flex-col">
        <div className="">
          <h3 class="text-lg font-semibold">Project Name</h3>
          <span class="text-gray-700">Book Store Management</span>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Manager's Name</h3>
          <span class="text-gray-800">Mr. Sadik Khan</span>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Team Members</h3>
          <span class="text-gray-700">Junior Web Team</span>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Category</h3>
          <span class="text-gray-700">Web Development</span>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Start Date</h3>
          <span class="text-gray-700">02/02/2024</span>
        </div>
        <div>
          <h3 class="text-lg font-semibold">End Date</h3>
          <span class="text-gray-700">02/05/2024</span>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Created By</h3>
          <span class="text-gray-700">Mr. Asad Khan</span>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Status</h3>
          <span class="text-gray-700 font-bold">Completed</span>
        </div>
      </div>
      <div>
        <div className="mt-6">
          <h3 class="text-lg font-semibold">Description</h3>
          <p class="text-gray-700 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quam
            voluptatum, laboriosam atque id assumenda molestias sapiente harum
            quia deserunt?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
