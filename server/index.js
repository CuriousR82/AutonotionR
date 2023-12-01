const express = require('express');
const { Client } = require('@notionhq/client');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors')

const notion = new Client({
    // your API key from notion
    auth: process.env.REACT_APP_NOTION_API_KEY,
});

app.use(cors())

// Projects
app.get('/project-data', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const response = await notion.databases.query({
            // your database ID
            database_id: process.env.REACT_APP_PROJECTS_DATABASE_ID,
            sorts: [
                {
                    property: 'Date',
                    direction: 'descending',
                },
            ],
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Arts
app.get('/art-data', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const response = await notion.databases.query({
            // your database ID
            database_id: process.env.REACT_APP_ARTS_DATABASE_ID,
            sorts: [
                {
                    property: 'Date',
                    direction: 'descending',
                },
            ],
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Experiences
app.get('/experience-data', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const response = await notion.databases.query({
            // your database ID
            database_id: process.env.REACT_APP_EXPERIENCES_DATABASE_ID,
            sorts: [
                {
                    property: 'Date',
                    direction: 'descending',
                },
            ],
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Personal
app.get('/personal-data', async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const response = await notion.databases.query({
            // your database ID
            database_id: process.env.REACT_APP_PERSONAL_DATABASE_ID,
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// locally hosting server for API
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});


