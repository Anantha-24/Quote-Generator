const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/quotes', async (req, res) => {
    const category = req.query.category;
    const url = category ? `https://api.quotable.io/quotes?tags=${category}` : 'https://api.quotable.io/quotes';
    try {
        const response = await axios.get(url);
        res.json(response.data.results);
    } catch (error) {
        res.status(500).send('Error fetching quotes');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});