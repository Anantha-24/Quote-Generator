import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [quotes, setQuotes] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
        fetchQuotes();
    }, [category]);

    const fetchQuotes = async () => {
        const url = category ? `http://localhost:5000/api/quotes?category=${category}` : 'http://localhost:5000/api/quotes';
        const response = await axios.get(url);
        setQuotes(response.data);
    };

    return (
        <div className="App">
            <h1>Quote Generator</h1>
            <div>
                <label>Filter by category:</label>
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">All</option>
                    <option value="life">Life</option>
                    <option value="happiness">Happiness</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
            <div className="quotes">
                {quotes.map((quote, index) => (
                    <div key={index} className="quote">
                        <p>"{quote.content}"</p>
                        <p>- {quote.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;


