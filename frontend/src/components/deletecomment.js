import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteComment = () => {
    const [id, setId] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://comments-d9cdx2rl.ue.gateway.dev/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                        mutation {
                            deleteComment(id: ${id}) {
                                success
                            }
                        }
                    `
                })
            });
            const data = await response.json();
            console.log('Comment deleted:', data);
            alert('Comment deleted successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error deleting comment:', error);
            alert('Failed to delete comment.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-danger text-white text-center">
                            <h4>Delete Comment</h4>
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
                                        value={id}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-danger btn-block mb-2">Delete Comment</button>
                                <button type="button" className="btn btn-secondary btn-block" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteComment;
