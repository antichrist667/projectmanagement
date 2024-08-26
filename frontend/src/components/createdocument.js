import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateDocument = () => {
    const [document, setDocument] = useState({
        id_proyect: '',
        content: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setDocument({
            ...document,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://documentss-d9cdx2rl.uc.gateway.dev/api/documents', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(document)
            });
            const data = await response.json();
            console.log('Document created:', data);
            alert('Document created successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error creating document:', error);
            alert('Failed to create document.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Create New Document</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label>Project ID</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="id_proyect"
                                        placeholder="Enter project ID"
                                        value={document.id_proyect}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Content</label>
                                    <textarea
                                        className="form-control"
                                        name="content"
                                        placeholder="Enter document content"
                                        rows="4"
                                        value={document.content}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Create Document</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateDocument;
