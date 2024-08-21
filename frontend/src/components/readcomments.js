import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReadComments = () => {
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch('https://documentservice-zondeli7dq-uc.a.run.app/comments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        query: `
                            {
                                allComments {
                                    id
                                    idProyect
                                    content
                                    createdAt
                                }
                            }
                        `
                    })
                });
                const data = await response.json();
                setComments(data.data.allComments);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, []);

    return (
        <div className="container mt-5">
            <h4 className="text-center mb-4">All Comments</h4>
            <div className="row">
                {comments.map(comment => (
                    <div key={comment.id} className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Project ID: {comment.idProyect}</h5>
                                <p className="card-text">{comment.content}</p>
                                <p className="card-text"><small className="text-muted">Created at: {new Date(comment.createdAt).toLocaleString()}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button type="button" className="btn btn-secondary btn-block" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
        </div>
    );
};

export default ReadComments;
