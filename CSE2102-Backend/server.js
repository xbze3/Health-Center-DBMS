const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'health_center_database'
})

app.get('/', (re, res) => {
    return res.json("From Backend Side")
})

app.get('/users', (re, res) => {
    const sql = "SELECT * FROM staff"
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8081, () => {
    console.log("Listening...")
})