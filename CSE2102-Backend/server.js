const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();
const db_pass = process.env.DB_PASS;

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: db_pass,
    database: 'health_center_database'
})

app.get('/', (re, res) => {
    return res.json("From Backend Side")
})

app.get('/users', (re, res) => {
    const sql = "SELECT * FROM prescriptions WHERE Staff_ID = 23"
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8081, () => {
    console.log("Listening...")
})