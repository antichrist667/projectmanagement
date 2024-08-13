const express = require('express');
const loginService = require('./services/loginservice'); 
const router = express.Router();

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await loginService.loginUser(email, password);
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
