import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateComment = () => {
    const [comment, setComment] = useState({
        id_proyect: '',
        content: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://commentservice-zondeli7dq-uc.a.run.app/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                        mutation {
                            createComment(idProyect: ${comment.id_proyect}, content: "${comment.content}") {
                                comment {
                                    id
                                    idProyect
                                    content
                                    createdAt
                                }
                            }
                        }
                    `
                })
            });
            const data = await response.json();
            console.log('Comment created:', data);
            alert('Comment created successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error creating comment:', error);
            alert('Failed to create comment.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Create New Comment</h4>
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
                                        value={comment.id_proyect}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Comment Content</label>
                                    <textarea
                                        className="form-control"
                                        name="content"
                                        placeholder="Enter your comment"
                                        rows="4"
                                        value={comment.content}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-2">Create Comment</button>
                                <button type="button" className="btn btn-secondary btn-block" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateComment;
