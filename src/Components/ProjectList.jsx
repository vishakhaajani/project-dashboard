import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
import EditProject from './EditProject.jsx';
import './Style.css';

const ProjectList = ({ initialProjects }) => {
  const [projects, setProjects] = useState(initialProjects);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedProject, setEditedProject] = useState({ name: '', dueDate: '', status: 'Active' });

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditedProject(projects[index]);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedProjects = [...projects];
    updatedProjects[editingIndex] = editedProject;
    setProjects(updatedProjects);
    setEditingIndex(null);
    setEditedProject({ name: '', dueDate: '', status: 'Active' });
  };

  return (
    <div className="mt-4">
      <h2 className="text-center mb-5">Project List</h2>
      <ProjectForm addProject={addProject} />

      {editingIndex !== null && (
        <EditProject editedProject={editedProject}
        setEditedProject={setEditedProject}
        handleEditSubmit={handleEditSubmit}
        setEditingIndex={setEditingIndex} />
      )}

      <div className="row mt-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card border-0 shadow-lg rounded-lg h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">{project.name}</h5>
                <p className="card-text">
                  <strong>Due Date:</strong> {project.dueDate}
                </p>
                <p className="card-text">
                  <strong>Status:</strong>
                  <span className={`badge ms-2 ${project.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                    {project.status}
                  </span>
                </p>
              </div>
              <div className="card-footer bg-transparent border-0">
                <small className="text-muted">Added recently</small>
                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => deleteProject(index)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning btn-sm float-end me-2"
                  onClick={() => startEdit(index)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
