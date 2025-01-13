require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.use(cors());
app.use(express.json());

app.get ('/test', (req, res) => {
    res.json({message: "Le serveur fonctionne !"})
});

app.post('/api/contact', async (req, res) => {
    const { email, message } = req.body;
    
    // Validation du format email
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return res.status(400).json({ error: 'Format email invalide' });
    }
    
    // Protection XSS basique
    if (message.includes('<script>')) {
        return res.status(400).json({ error: 'Contenu non autorisé' });
    }

    try {
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: 'Nouveau message du portfolio',
            text: `Message de ${email}:\n\n${message}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Email envoyé avec succès"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Erreur lors de l'envoi de l'email"
        });
    }

});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`)
});