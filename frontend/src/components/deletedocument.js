import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteDocument = () => {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await fetch('https://documentss-d9cdx2rl.uc.gateway.dev/api/documents');
                const data = await response.json();
                setDocuments(data);
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        };

        fetchDocuments();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this document?')) {
            try {
                await fetch(`https://documentss-d9cdx2rl.uc.gateway.dev/api/documents/${id}`, {
                    method: 'DELETE'
                });
                setDocuments(documents.filter(document => document.id !== id));
                alert('Document deleted successfully!');
            } catch (error) {
                console.error('Error deleting document:', error);
                alert('Failed to delete document.');
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2>Delete Document</h2>
            <ul className="list-group">
                {documents.map(document => (
                    <li key={document.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {document.content}
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(document.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeleteDocument;
