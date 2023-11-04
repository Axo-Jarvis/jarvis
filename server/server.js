const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "34.102.42.237",
  database: "postgres",
  password: "BestPasswordEver",
  port: 5432,
});

// verify postgres connection on start
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("Connected to PostgreSQL database");

  client.query("SELECT * FROM sample_table", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log("Data in sample_table:", result.rows);
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));

  app.get("*", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
