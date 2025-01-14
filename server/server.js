//require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.use(cors({
    origin: ['https://alexbonniard.dev', 'https://www.alexbonniard.dev']
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.post('/api/contact', async (req, res) => {
    const { email, message } = req.body;
    
    // Validation plus complète
    if (!email || !message) {
        return res.status(400).json({ error: 'Email et message sont requis' });
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return res.status(400).json({ error: 'Format email invalide' });
    }
    
    // Protection XSS améliorée
    const sanitizedMessage = message
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    try {
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: 'Nouveau message du portfolio',
            text: `Message de ${email}:\n\n${sanitizedMessage}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Email envoyé avec succès"
        });
    } catch (error) {
        console.error('Erreur d\'envoi d\'email:', error);
        res.status(500).json({
            success: false,
            message: "Erreur lors de l'envoi de l'email"
        });
    }
});

app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route non trouvée' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Erreur interne du serveur'
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`)
});