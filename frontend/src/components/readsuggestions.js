import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReadSuggestions = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await fetch('https://suggestionsservice-zondeli7dq-uc.a.run.app/api/suggestions');
                const data = await response.json();
                setSuggestions(data);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        };

        fetchSuggestions();
    }, []);

    return (
        <div className="container mt-5">
            <h3>Suggestions</h3>
            <ul className="list-group">
                {suggestions.map((suggestion) => (
                    <li key={suggestion.id} className="list-group-item">
                        {suggestion.suggestion_text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadSuggestions;
