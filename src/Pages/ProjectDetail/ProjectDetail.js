import React from "react";

const ProjectDetail = () => {
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
          <span class="text-gray-700">Completed</span>
        </div>
      </div>
      <div>
        <div>
          <h3 class="text-lg font-semibold">Description</h3>
          <p class="text-gray-700">
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
