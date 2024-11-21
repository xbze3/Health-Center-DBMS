const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const authenticateToken = require("./utils/authMiddleware");

dotenv.config();
const db_pass = process.env.DB_PASS;
const db_user = process.env.DB_USER;
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;
const SECRET_KEY = process.env.SECRET_KEY;

const app = express();
app.use(
    cors({
        allowedHeaders: ["Authorization", "Content-Type"],
    })
);
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: db_host,
    port: db_port,
    user: db_user,
    password: db_pass,
    database: db_name,
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        process.exit(1); // Exiting the process if DB connection fails
    } else {
        console.log("Connected to database!");
    }
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

// Add this route to the Express app

app.get("/api/record-counts", authenticateToken, (req, res) => {
    const staffId = req.user.id;

    if (staffId !== 0) {
        return res.status(403).json({ message: "Forbidden: Access is denied" });
    }

    const queries = {
        appointments: "SELECT COUNT(*) AS count FROM appointments",
        medicalRecords: "SELECT COUNT(*) AS count FROM `medical records`",
        prescriptions: "SELECT COUNT(*) AS count FROM prescriptions",
        staff: "SELECT COUNT(*) AS count FROM staff",
        patients: "SELECT COUNT(*) AS count FROM patients",
        billingInvoices: "SELECT COUNT(*) AS count FROM `billing/invoices`",
    };

    const results = {};

    // Query each table and send the response once all queries have completed
    Promise.all(
        Object.keys(queries).map(
            (key) =>
                new Promise((resolve, reject) => {
                    db.query(queries[key], (err, data) => {
                        if (err) reject(err);
                        results[key] = data[0].count;
                        resolve();
                    });
                })
        )
    )
        .then(() => {
            res.json(results); // Send all counts as a JSON response
        })
        .catch((err) => {
            res.status(500).json({
                message: "Error fetching counts",
                error: err,
            });
        });
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

// Count Route

app.get("/api/doctor-record-counts", authenticateToken, (re, res) => {
    const staffId = re.user.id; // Changed to staffId to match the field

    const queries = {
        appointments:
            "SELECT COUNT(*) AS count FROM appointments WHERE Staff_ID = ?",
        medicalRecords:
            "SELECT COUNT(*) AS count FROM `medical records` WHERE Staff_ID = ?",
        prescriptions:
            "SELECT COUNT(*) AS count FROM prescriptions WHERE Staff_ID = ?",
    };

    const results = {};

    Promise.all(
        Object.keys(queries).map(
            (key) =>
                new Promise((resolve, reject) => {
                    db.query(queries[key], [staffId], (err, data) => {
                        if (err) return reject(err);
                        if (Array.isArray(data) && data.length > 0) {
                            results[key] = data[0].count;
                        } else {
                            results[key] = 0; // Set to 0 if no records found
                        }
                        resolve();
                    });
                })
        )
    )
        .then(() => {
            res.json(results); // Return the counts for the staff
        })
        .catch((err) => {
            res.status(500).json({
                message: "Error fetching counts",
                error: err,
            });
        });
});

// End of Doctor Queries

// Insertion Routes

app.post("/insert", authenticateToken, (req, res) => {
    const { page, patientID, staffID, date, time, reason_for_visit } = req.body;

    // Log the data for debugging
    console.log(
        `Page ${page}\nPatient ID: ${patientID}\nStaff ID: ${staffID}\nDate: ${date}\nTime: ${time}\nReason for Visit: ${reason_for_visit}`
    );

    // SQL to check if the record exists
    const checkQuery = `
        SELECT * FROM appointments 
        WHERE Patient_ID = ? AND Staff_ID = ? AND Date = ? AND Time = ?
    `;

    // SQL to insert a new record
    const insertQuery = `
        INSERT INTO appointments (Patient_ID, Staff_ID, Date, Time, Reason_for_Visit)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(checkQuery, [patientID, staffID, date, time], (err, results) => {
        if (err) {
            console.error("Error checking for existing record:", err);
            return res.status(500).json({ error: "Database error." });
        }

        if (results.length > 0) {
            // Record already exists
            res.status(409).json({
                message:
                    "A record with the same staffID, patientID, date, and time already exists.",
            });
        } else {
            // Insert the new record
            db.query(
                insertQuery,
                [patientID, staffID, date, time, reason_for_visit],
                (err, results) => {
                    if (err) {
                        console.error("Error inserting record:", err);
                        return res
                            .status(500)
                            .json({ error: "Database error." });
                    }

                    res.status(201).json({
                        message: "Record inserted successfully.",
                        recordID: results.insertId,
                    });
                }
            );
        }
    });
});

// Login Queries

app.post("/login", (re, res) => {
    const { id, first_name, last_name, password } = re.body;

    const credsQuery = `
        SELECT creds.Staff_ID, creds.First_Name, creds.Last_Name, creds.Password,
               CASE WHEN creds.Staff_ID = 0 THEN 'Admin' ELSE staff.Role END AS Role
        FROM creds
        LEFT JOIN staff ON creds.Staff_ID = staff.Staff_ID
        WHERE creds.Staff_ID = ? AND creds.First_Name = ? AND creds.Last_Name = ?
    `;

    db.query(credsQuery, [id, first_name, last_name], async (err, results) => {
        if (err) {
            res.status(500).json({ message: "Server error", error: err });
            return;
        }

        // Check if user is found and compare hashed passwords
        if (results.length > 0) {
            const storedPassword = results[0].Password;

            // Compare the hashed password
            const isMatch = await bcrypt.compare(password, storedPassword);

            if (isMatch) {
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
        } else {
            res.status(401).json({ message: "Invalid Credentials" });
        }
    });
});

app.listen(8081, "0.0.0.0", () => {
    console.log("Listening on port 8081...");
});
