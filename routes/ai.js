const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
    const prompt = req.body.prompt || "";
    const context = req.body.context || {};

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.3
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(JSON.parse(response.data.choices[0].message.content));
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ error: "AI request failed" });
    }
});

module.exports = router;
