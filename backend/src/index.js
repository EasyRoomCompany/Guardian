const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const PORT = 3333;

const pool = new Pool({
  connectionString: process.env.POSTGRESS_URL,
});

const app = express();

// Middleware para fazer o parsing do corpo da solicitação como JSON
app.use(express.json());

/**
 * Rota de teste
 */
app.get("/", (req, res) => {
  console.log("Olá, mundo");
});

/**
 * Rota para listar usuários
 */
app.get("/users", async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM users");
    return res.status(200).send(rows);
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 * Rota para login
 */
app.post("/login", async (req, res) => {
  const { user_name, user_email, user_password, user_address } = req.body;

  let user = "";
  try {
    user = await pool.query("SELECT * FROM users WHERE user_name = ($1)", [
      user_name,
    ]);
    if (!user.rows[0]) {
      const newLogin = await pool.query(
        `INSERT INTO users(user_name, user_email, user_password, user_address) VALUES ($1, $2, $3, $4)`,
        [user_name, user_email, user_password, user_address]
      );
    }
    return res.status(200).send(newLogin);
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.post('/')

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
