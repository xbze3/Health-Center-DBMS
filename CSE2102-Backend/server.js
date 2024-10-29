const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const db_pass = process.env.DB_PASS;

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: db_pass,
    database: "health_center_database",
});

app.get("/", (re, res) => {
    return res.json("From Backend Side");
});

// Admin Queries

// Admin Staff

app.get("/admin-staff", (re, res) => {
    const sql = "SELECT * FROM staff;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/admin-staff/:value", (re, res) => {
    const { value } = re.params;
    const sql = "SELECT * FROM staff WHERE " + value;

    db.query(sql, [value], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Admin Appointments

app.get("/admin-appointments", (re, res) => {
    const sql = "SELECT * FROM appointments;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/admin-appointments/:value", (re, res) => {
    const { value } = re.params;
    const sql = "SELECT * FROM appointments WHERE " + value;

    db.query(sql, [value], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Admin Medical Records

app.get("/admin-medical-records", (re, res) => {
    const sql = "SELECT * FROM `medical records`;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/admin-medical-records/:value", (re, res) => {
    const { value } = re.params;
    const sql = "SELECT * FROM `medical records` WHERE " + value;

    db.query(sql, [value], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Admin Patients

app.get("/admin-patients", (re, res) => {
    const sql = "SELECT * FROM patients;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/admin-patients/:value", (re, res) => {
    const { value } = re.params;
    const sql = "SELECT * FROM patients WHERE " + value;

    db.query(sql, [value], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Admin Prescriptions

app.get("/admin-prescriptions", (re, res) => {
    const sql = "SELECT * FROM prescriptions;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/admin-prescriptions/:value", (re, res) => {
    const { value } = re.params;
    const sql = "SELECT * FROM prescriptions WHERE " + value;

    db.query(sql, [value], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Admin Billing and Invoices

app.get("/admin-billing-invoices", (re, res) => {
    const sql = "SELECT * FROM `billing/invoices`";

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/admin-billing-invoices/:value", (re, res) => {
    const { value } = re.params;
    const sql = "SELECT * FROM `billing/invoices` WHERE " + value;

    db.query(sql, [value], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// End of Admin Queries

app.listen(8081, () => {
    console.log("Listening...");
});
