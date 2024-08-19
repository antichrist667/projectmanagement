import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReadProjects = () => {
    const [projects, setProjects] = useState([]);
    const [projectId, setProjectId] = useState('');
    const navigate = useNavigate();

    const fetchProjects = async () => {
        try {
            const response = await fetch('https://projectservice-zondeli7dq-uc.a.run.app/api/projects');
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const fetchProjectById = async () => {
        try {
            const response = await fetch(`https://projectservice-zondeli7dq-uc.a.run.app/api/projects/${projectId}`);
            const data = await response.json();
            setProjects([data]); // Envuelve el proyecto en un array para manejarlo igual que la lista
        } catch (error) {
            console.error('Error fetching project by ID:', error);
            alert('Project not found');
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleSearchById = () => {
        if (projectId) {
            fetchProjectById();
        } else {
            fetchProjects();
        }
    };

    const handleBackToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2>Projects</h2>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter project ID"
                            value={projectId}
                            onChange={(e) => setProjectId(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" onClick={handleSearchById}>
                                Search
                            </button>
                        </div>
                    </div>
                    <ul className="list-group">
                        {projects.length > 0 ? (
                            projects.map(project => (
                                <li key={project.id} className="list-group-item">
                                    {project.name} - {project.status}
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item">No projects found</li>
                        )}
                    </ul>
                    <button
                        type="button"
                        className="btn btn-secondary btn-block mt-3"
                        onClick={handleBackToDashboard}
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReadProjects;
