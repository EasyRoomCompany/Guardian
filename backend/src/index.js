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
 * Rota para listar empresas
 */
app.get("/company", async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM company");
    return res.status(200).send(rows);
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 * Rota para listar as salas
 */
app.get("/room", async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM room");
    return res.status(200).send(rows);
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 * Rota para listar resevation
 */
app.get("/reservation", async (req, res) => {
  try {
    const rows = await pool.query("SELECT * FROM reservation");
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

  try {
    const existingUser = await pool.query("SELECT * FROM users WHERE user_name = $1",[user_name]);

    if (existingUser.rows.length === 0) {
      const newLogin = await pool.query(
        `INSERT INTO users(user_name, user_email, user_password, user_address) VALUES ($1, $2, $3, $4)`,
        [user_name, user_email, user_password, user_address]
      );
      return res.status(200).send(newLogin);
    } else {
      return res.status(200).send("User already exists");
    }
  } catch (error) {
    return res.status(400).send(error);
  }
});

/**
 * Rota post newcompany
 */
app.post("/newcompany", async(req, res) => {
  const { razao_social, cnpj, cep, email, logradouro, municipio, bairro, telefone } = req.body;

  const newcompany = await pool.query(`INSERT INTO company(razao_social, cnpj, cep, email, logradouro, municipio, bairro, telefone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [razao_social, cnpj, cep, email, logradouro, municipio, bairro, telefone]);
  try {
    return res.status(200).send(newcompany)
  } catch (error) {
    return res.status(400).send(error)
  }
})

/**
 * Rota post newroom
 */
app.post("/newroom", async(req, res) => {
  const { capacity, description, name, priceHour } = req.body;

  const newroom = await pool.query(`INSERT INTO room(capacity, description, name, priceHour) VALUES ($1, $2, $3, $4)`, [capacity, description, name, priceHour]);
  try {
    return res.status(200).send(newroom)
  } catch (error) {
    return res.status(400).send(error)
  }
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));