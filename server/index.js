const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "transactions_db",
});

app.post("/api/transactions", (req, res) => {
  const { dateTime, sum, category, comment } = req.body;
  const query =
    "INSERT INTO transactions (dateTime, sum, category, comment) VALUES (?, ?, ?, ?)";

  db.query(query, [dateTime, sum, category, comment], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to insert transaction" });
    }
    res.status(200).json({ message: "Transaction added successfully" });
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
