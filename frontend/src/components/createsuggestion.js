import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateSuggestion = () => {
    const [suggestion, setSuggestion] = useState({
        suggestion_text: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSuggestion({
            ...suggestion,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://suggestions-d9cdx2rl.ue.gateway.dev/api/suggestions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(suggestion)
            });
            const data = await response.json();
            console.log('Suggestion created:', data);
            alert('Suggestion created successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error creating suggestion:', error);
            alert('Failed to create suggestion.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Create New Suggestion</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label>Suggestion Text</label>
                                    <textarea
                                        className="form-control"
                                        name="suggestion_text"
                                        placeholder="Enter your suggestion"
                                        rows="4"
                                        value={suggestion.suggestion_text}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Create Suggestion</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSuggestion;
