import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteProject = () => {
    const [projectId, setProjectId] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await fetch(`https://projectservice-zondeli7dq-uc.a.run.app/api/projects/${projectId}`, {
                method: 'DELETE',
            });
            console.log('Project deleted');
            alert('Project deleted successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error deleting project:', error);
            alert('Failed to delete project.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-danger text-white text-center">
                            <h4>Delete Project</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group mb-3">
                                <label>Project ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={projectId}
                                    onChange={(e) => setProjectId(e.target.value)}
                                    placeholder="Enter project ID"
                                />
                            </div>
                            <button type="button" className="btn btn-danger btn-block" onClick={handleDelete}>
                                Delete Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProject;
