const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const quotes = [
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon", category: "life" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama", category: "happiness" },
    { text: "Get busy living or get busy dying.", author: "Stephen King", category: "life" },
    // Add more quotes as needed
];

app.get('/api/quotes', (req, res) => {
    const category = req.query.category;
    if (category) {
        const filteredQuotes = quotes.filter(quote => quote.category === category);
        res.json(filteredQuotes);
    } else {
        res.json(quotes);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
