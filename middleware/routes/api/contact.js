require('dotenv').config();

const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');

router.post('/submit', async (req, res, next) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Testing",
            text: "This is a test email."
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.json({message: "Message received."});

    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
});

module.exports = router;