import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateComment = () => {
    const [comment, setComment] = useState({
        id: '',
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
            const response = await fetch('https://comments-d9cdx2rl.uc.gateway.dev/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                        mutation {
                            updateComment(id: ${comment.id}, content: "${comment.content}") {
                                comment {
                                    id
                                    content
                                }
                            }
                        }
                    `
                })
            });
            const data = await response.json();
            console.log('Comment updated:', data);
            alert('Comment updated successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error updating comment:', error);
            alert('Failed to update comment.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-warning text-white text-center">
                            <h4>Update Comment</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label>Comment ID</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="id"
                                        placeholder="Enter comment ID"
                                        value={comment.id}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>New Content</label>
                                    <textarea
                                        className="form-control"
                                        name="content"
                                        placeholder="Enter new content"
                                        rows="4"
                                        value={comment.content}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-warning btn-block mb-2">Update Comment</button>
                                <button type="button" className="btn btn-secondary btn-block" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateComment;
