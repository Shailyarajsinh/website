import express from 'express';
import bodyParser from 'body-parser';
import Bot from './bot.js';
import cors from 'cors';
import dotenv from 'dotenv';



dotenv.config();

const app = express();
const port = 5000;


// enable CORS all requests

app.use(cors());


// enable CORS for specific origin
app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
));

app.use(bodyParser.json());


// send message to telegram bot

app.post('/send-message', async(req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const bot = new Bot(process.env.REACT_APP_BOT_TOKEN);
        bot.sendMessage(
            process.env.REACT_APP_CHAT_ID, 
            `Name: *${name}*\n\nEmail: *${email}*\n\nSubject: *${subject}*\n\nMessage: *${message}*`
        );
       
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.log(error); 
        res.status(500).send('Internal Server Error');
    }
});

// start the server

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});