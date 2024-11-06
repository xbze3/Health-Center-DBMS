const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const authenticateToken = require("./utils/authMiddleware");

dotenv.config();
const db_pass = process.env.DB_PASS;
const SECRET_KEY = process.env.SECRET_KEY;

const app = express();
app.use(
    cors({
        allowedHeaders: ["Authorization", "Content-Type"],
    })
);
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

app.get("/admin-staff", authenticateToken, (re, res) => {
    const staffId = re.user.id;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM staff;";
        db.query(sql, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

app.get("/admin-staff/:value", authenticateToken, (re, res) => {
    const staffId = re.user.id;
    const { value } = re.params;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM staff WHERE " + value;
        db.query(sql, [value], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

// Admin Appointments

app.get("/admin-appointments", authenticateToken, (re, res) => {
    const staffId = re.user.id;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM appointments;";
        db.query(sql, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

app.get("/admin-appointments/:value", authenticateToken, (re, res) => {
    const staffId = re.user.id;
    const { value } = re.params;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM appointments WHERE " + value;
        db.query(sql, [value], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

// Admin Medical Records

app.get("/admin-medical-records", authenticateToken, (re, res) => {
    const staffId = re.user.id;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM `medical records`;";
        db.query(sql, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

app.get("/admin-medical-records/:value", authenticateToken, (re, res) => {
    const staffId = re.user.id;
    const { value } = re.params;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM `medical records` WHERE " + value;
        db.query(sql, [value], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

// Admin Patients

app.get("/admin-patients", authenticateToken, (re, res) => {
    const staffId = re.user.id;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM patients;";
        db.query(sql, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

app.get("/admin-patients/:value", authenticateToken, (re, res) => {
    const staffId = re.user.id;
    const { value } = re.params;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM patients WHERE " + value;
        db.query(sql, [value], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

// Admin Prescriptions

app.get("/admin-prescriptions", authenticateToken, (re, res) => {
    const staffId = re.user.id;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM prescriptions;";
        db.query(sql, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

app.get("/admin-prescriptions/:value", authenticateToken, (re, res) => {
    const staffId = re.user.id;
    const { value } = re.params;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM prescriptions WHERE " + value;
        db.query(sql, [value], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

// Admin Billing and Invoices

app.get("/admin-billing-invoices", authenticateToken, (re, res) => {
    const staffId = re.user.id;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM `billing/invoices`";
        db.query(sql, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

app.get("/admin-billing-invoices/:value", authenticateToken, (re, res) => {
    const staffId = re.user.id;
    const { value } = re.params;

    if (staffId != 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    } else {
        const sql = "SELECT * FROM `billing/invoices` WHERE " + value;
        db.query(sql, [value], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json(data);
        });
    }
});

// End of Admin Queries

// Doctor Queries

// Doctor Appointments

app.get("/med-appointments/", authenticateToken, (re, res) => {
    const staffId = re.user.id; // Accessing the `id` from the decoded JWT

    // Using prepared statements for security (prevents SQL injection)
    const sql = "SELECT * FROM appointments WHERE Staff_ID = " + staffId;

    db.query(sql, [staffId], (err, data) => {
        if (err) return res.status(500).json(err); // Handling any DB errors
        if (data.length === 0) data = "None";
        return res.json(data); // Sending the data back as JSON response
    });
});

app.get("/med-appointments/:value1", authenticateToken, (re, res) => {
    const staffId = re.user.id;
    const { value1 } = re.params;
    const sql =
        "SELECT * FROM appointments WHERE Staff_ID = " +
        staffId +
        " AND " +
        value1;

    db.query(sql, [staffId, value1], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) data = "None";
        return res.json(data);
    });
});

// Doctor Medical Records

app.get("/med-medical-records/", authenticateToken, (re, res) => {
    const staffId = re.user.id;

    const sql = "SELECT * FROM `medical records` WHERE Staff_ID = " + staffId;
    db.query(sql, [staffId], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) data = "None";
        return res.json(data);
    });
});

app.get("/med-medical-records/:value1", authenticateToken, (re, res) => {
    const staffId = re.user.id;
    const { value1 } = re.params;
    const sql =
        "SELECT * FROM `medical records` WHERE Staff_ID = " +
        staffId +
        " AND " +
        value1;

    db.query(sql, [staffId, value1], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) data = "None";
        return res.json(data);
    });
});

// Doctor Prescriptions

app.get("/med-prescriptions/", authenticateToken, (re, res) => {
    const staffId = re.user.id;
    const sql = "SELECT * FROM prescriptions WHERE Staff_ID = " + staffId;
    db.query(sql, [staffId], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) data = "None";
        return res.json(data);
    });
});

app.get("/med-prescriptions/:value1", authenticateToken, (re, res) => {
    const staffId = re.user.id;
    const { value1 } = re.params;
    const sql =
        "SELECT * FROM prescriptions WHERE Staff_ID = " +
        staffId +
        " AND " +
        value1;

    db.query(sql, [staffId, value1], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) data = "None";
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
            const user = results[0];
            const userRole = user.Role;

            // Generate a JWT token
            const token = jwt.sign(
                { id: user.Staff_ID, first_name: user.First_Name },
                SECRET_KEY,
                { expiresIn: "1h" } // Token will expire in 1 hour
            );

            res.status(200).json({
                message: "Login successful",
                token: token, // Include the token in the response
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
