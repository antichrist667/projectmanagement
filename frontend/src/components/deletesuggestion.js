import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteSuggestion = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await fetch(`https://suggestionsservice-zondeli7dq-uc.a.run.app/api/suggestions/${id}`, {
                method: 'DELETE',
            });
            alert('Suggestion deleted successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error deleting suggestion:', error);
            alert('Failed to delete suggestion.');
        }
    };

    return (
        <div className="container mt-5">
            <h4>Are you sure you want to delete this suggestion?</h4>
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
    );
};

export default DeleteSuggestion;
