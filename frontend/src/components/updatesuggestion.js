import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateSuggestion = () => {
    const { id } = useParams();
    const [suggestion, setSuggestion] = useState({ suggestion_text: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSuggestion = async () => {
            try {
                const response = await fetch(`https://suggestions-d9cdx2rl.ue.gateway.dev/api/suggestions/${id}`);
                const data = await response.json();
                setSuggestion(data);
            } catch (error) {
                console.error('Error fetching suggestion:', error);
            }
        };

        fetchSuggestion();
    }, [id]);

    const handleChange = (e) => {
        setSuggestion({
            ...suggestion,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://suggestions-d9cdx2rl.ue.gateway.dev/api/suggestions/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(suggestion)
            });
            const data = await response.json();
            console.log('Suggestion updated:', data);
            alert('Suggestion updated successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error updating suggestion:', error);
            alert('Failed to update suggestion.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Update Suggestion</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label>Suggestion Text</label>
                                    <textarea
                                        className="form-control"
                                        name="suggestion_text"
                                        rows="4"
                                        value={suggestion.suggestion_text}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Update Suggestion</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateSuggestion;
