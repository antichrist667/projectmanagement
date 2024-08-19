import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateProject = () => {
    const [projectId, setProjectId] = useState('');
    const [project, setProject] = useState({
        name: '',
        description: '',
        start_date: '',
        end_date: '',
        status: '',
        user_id: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://projectservice-zondeli7dq-uc.a.run.app/api/projects/${projectId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project)
            });
            const data = await response.json();
            console.log('Project updated:', data);
            alert('Project updated successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error updating project:', error);
            alert('Failed to update project.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Update Project</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
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
                                <div className="form-group mb-3">
                                    <label>Project Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Enter project name"
                                        value={project.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Description</label>
                                    <textarea
                                        className="form-control"
                                        name="description"
                                        placeholder="Enter project description"
                                        rows="4"
                                        value={project.description}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="form-group mb-3">
                                    <label>Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="start_date"
                                        value={project.start_date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>End Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="end_date"
                                        value={project.end_date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Status</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="status"
                                        placeholder="Enter project status"
                                        value={project.status}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>User ID</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="user_id"
                                        placeholder="Enter user ID"
                                        value={project.user_id}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Update Project</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProject;
