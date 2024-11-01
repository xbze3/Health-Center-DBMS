const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const db_pass = process.env.DB_PASS;

const app = express();
app.use(cors());
app.use(bodyParser.json());

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

// Doctor Queries

// Doctor Appointments

app.get("/doctor-appointments/:value", (re, res) => {
    const { value } = re.params;
    const sql = "SELECT * FROM appointments WHERE Staff_ID = " + value;
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/doctor-appointments/:value1/:value2", (re, res) => {
    const { value1 } = re.params;
    const { value2 } = re.params;
    const sql =
        "SELECT * FROM appointments WHERE Staff_ID = " +
        value1 +
        " AND " +
        value2;

    db.query(sql, [value1, value2], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Doctor Medical Records

app.get("/doctor-medical-records/:value", (re, res) => {
    const { value } = re.params;
    const sql = "SELECT * FROM `medical records` WHERE Staff_ID = " + value;
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/doctor-appointments/:value1/:value2", (re, res) => {
    const { value1 } = re.params;
    const { value2 } = re.params;
    const sql =
        "SELECT * FROM `medical records` WHERE Staff_ID = " +
        value1 +
        " AND " +
        value2;

    db.query(sql, [value1, value2], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Doctor Prescriptions

app.get("/doctor-prescriptions/:value", (re, res) => {
    const { value } = re.params;
    const sql = "SELECT * FROM prescriptions WHERE Staff_ID = " + value;
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/doctor-prescriptions/:value1/:value2", (re, res) => {
    const { value1 } = re.params;
    const { value2 } = re.params;
    const sql =
        "SELECT * FROM prescriptions WHERE Staff_ID = " +
        value1 +
        " AND " +
        value2;

    db.query(sql, [value1, value2], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// End of Doctor Queries

// Login Queries

app.post("/login", (req, res) => {
    const { id, first_name, last_name, password } = req.body;

    const credsQuery = `
        SELECT creds.Staff_ID, creds.First_Name, creds.Last_Name, creds.Password,
               CASE WHEN creds.Staff_ID = 0 THEN 'Admin' ELSE staff.Role END AS Role
        FROM creds
        LEFT JOIN staff ON creds.Staff_ID = staff.Staff_ID
        WHERE creds.Staff_ID = ? AND creds.First_Name = ? AND creds.Last_Name = ?
    `;

    db.query(credsQuery, [id, first_name, last_name], (err, results) => {
        if (err) {
            res.status(500).json({ message: "Server error", error: err });
            return;
        }

        // Check if user is found and password matches
        if (results.length > 0 && results[0].Password === password) {
            const userRole = results[0].Role;
            res.status(200).json({
                message: "Login successful",
                role: userRole,
            });
        } else {
            res.status(401).json({ message: "Invalid Credentials" });
        }
    });
});

app.listen(8081, () => {
    console.log("Listening...");
});
