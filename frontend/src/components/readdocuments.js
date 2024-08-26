import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReadDocuments = () => {
    const [documents, setDocuments] = useState([]);

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

    return (
        <div className="container mt-5">
            <h2>Documents</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Project ID</th>
                        <th>Content</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map(document => (
                        <tr key={document.id}>
                            <td>{document.id}</td>
                            <td>{document.id_proyect}</td>
                            <td>{document.content}</td>
                            <td>{document.created_at}</td>
                            <td>{document.updated_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReadDocuments;
