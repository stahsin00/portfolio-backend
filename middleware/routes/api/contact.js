const express = require('express');
const router = express.Router();

router.post('/submit', async (req, res, next) => {
    try {
        // TODO

        res.json({message: "Message received."})
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
});

module.exports = router;