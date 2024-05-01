import React, { useState } from "react";

const EditTask = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    task: "",
    subject: "",
    startDate: "",
    endDate: "",
    teamMembers: "",
    createdBy: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="max-w-lg mx-auto text-slate-800">
      <h2 className="text-2xl font-semibold mb-4">Edit This Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          <label htmlFor="projectName" className="block">
            Project Name
          </label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            className="w-full borderrounded-md py-2 px-3 text-slate-900 bg-white"
            required
          />
        </div>
        <div>
          <label htmlFor="task" className="block">
            Task
          </label>
          <input
            type="text"
            id="task"
            name="task"
            value={formData.task}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-slate-900 bg-white"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block">
            subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-slate-900 bg-white"
            required
          />
        </div>
        <div>
          <label htmlFor="Team members" className="block">
            Team members
          </label>
          <input
            type="text"
            id="teamMembers"
            name="teamMembers"
            value={formData.teamMembers}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-slate-900 bg-white"
            required
          />
        </div>
        <div>
          <label htmlFor="startDate" className="block">
            Start Date
          </label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-slate-900 bg-white"
            required
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block">
            End Date
          </label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-slate-900 bg-white"
            required
          />
        </div>
        <div>
          <label htmlFor=" createdBy" className="block">
            CreatedBy
          </label>
          <input
            type="text"
            id="createdBy"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 text-slate-900 bg-white"
            required
          />
        </div>

        {/* description */}
        <div>
          <label htmlFor="description" className="block">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-md py-2 px-3 h-32 text-slate-900 bg-white"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
