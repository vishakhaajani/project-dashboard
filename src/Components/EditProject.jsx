import React from 'react';

const EditProject = ({ editedProject, setEditedProject, handleEditSubmit, setEditingIndex }) => {
  return (
    <div className="my-5">
      <div className="col-lg-6 col-md-8">
        <div className="card shadow-lg mb-4">
          <div className="card-body">
            <h4 className="text-center">Edit Project</h4>
            <form onSubmit={handleEditSubmit}>
              <div className='form-group'>
                <label>Project Name:</label>
                <input
                  type="text"
                  className='form-control'
                  value={editedProject.name}
                  onChange={(e) => setEditedProject({ ...editedProject, name: e.target.value })}
                />
              </div>
              <div className='form-group'>
                <label>Due Date:</label>
                <input
                  type="date"
                  className='form-control'
                  value={editedProject.dueDate}
                  onChange={(e) => setEditedProject({ ...editedProject, dueDate: e.target.value })}
                />
              </div>
              <div className='form-group'>
                <label>Status:</label>
                <select
                  className='form-control'
                  value={editedProject.status}
                  onChange={(e) => setEditedProject({ ...editedProject, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <button type='submit' className='btn btn-info mt-3'>Update Project</button>
              <button
                type='button'
                className='btn btn-secondary mt-3 ms-2'
                onClick={() => setEditingIndex(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
