import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateDocument = () => {
    const { id } = useParams();
    const [document, setDocument] = useState({
        id_proyect: '',
        content: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await fetch(`https://documentss-d9cdx2rl.uc.gateway.dev/api/documents/${id}`);
                const data = await response.json();
                setDocument(data);
            } catch (error) {
                console.error('Error fetching document:', error);
            }
        };

        fetchDocument();
    }, [id]);

    const handleChange = (e) => {
        setDocument({
            ...document,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://documentss-d9cdx2rl.uc.gateway.dev/api/documents/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(document)
            });
            const data = await response.json();
            console.log('Document updated:', data);
            alert('Document updated successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error updating document:', error);
            alert('Failed to update document.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-success text-white text-center">
                            <h4>Update Document</h4>
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
                                <button type="submit" className="btn btn-success btn-block">Update Document</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateDocument;
