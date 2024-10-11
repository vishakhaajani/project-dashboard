import React, { useState } from 'react';

const ProjectForm = ({ addProject }) => {
  const [project, setProject] = useState({
    name: '',
    dueDate: '',
    status: 'Active',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(project);
    setProject({ name: '', dueDate: '', status: 'Active' });
  };

  return (
    <div className="mb-4">
      <div className="col-lg-6 shadow-lg p-3 bg-light">
        <h4 className="card-title text-center">Add New Project</h4>
        <form onSubmit={handleSubmit} className=' shadow-sm'>
          <div className="form-group">
            <label>Project Name:</label>
            <input
              type="text"
              className="form-control"
              value={project.name}
              onChange={(e) => setProject({ ...project, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Due Date:</label>
            <input
              type="date"
              className="form-control"
              value={project.dueDate}
              onChange={(e) => setProject({ ...project, dueDate: e.target.value })}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Status:</label>
            <select
              className="form-control"
              value={project.status}
              onChange={(e) => setProject({ ...project, status: e.target.value })}
            >
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button type="submit" className="btn btn-info mt-4 w-100">
            Add Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
