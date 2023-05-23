const express = require("express");
const cors = require('cors');
const { Pool } = require("pg");
require("dotenv").config();

const PORT = 3333;
const pool = new Pool({
  connectionString: process.env.POSTGRESS_URL,
});

const app = express();
app.use(cors());

// Middleware para fazer o parsing do corpo da solicitação como JSON
app.use(express.json());


function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
};

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}

function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
}

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

  try {
    const newcompany = await pool.query(`INSERT INTO company(razao_social, cnpj, cep, email, logradouro, municipio, bairro, telefone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [razao_social, cnpj, cep, email, logradouro, municipio, bairro, telefone]);
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

  try {
    const newroom = await pool.query(`INSERT INTO room(capacity, description, name, priceHour) VALUES ($1, $2, $3, $4)`, [capacity, description, name, priceHour]);
    return res.status(200).send(newroom)
  } catch (error) {
    return res.status(400).send(error)
  }
})

/**
 * Rtoa post reservation
 */
app.post("/reservation", async(req, res) => {
  const { eventcategory, data, initialhour, finishhour, room_id, id_user, accesskey, status } = req.body

  try {
    const newreservation = await pool.query(`INSERT INTO reservation( eventcategory, data, initialhour, finishhour, room_id, id_user, accesskey, status ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, [eventcategory, data, initialhour, finishhour, room_id, id_user, accesskey, status]);
    return res.status(200).send(newreservation)
  } catch (error) {
    return res.status(400).send(error)
  }
})

/**
 * Rota put users
 */
app.put("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const { user_name, user_email, user_password, user_address } = req.body;

  try {
    const existingUser = await pool.query("SELECT * FROM users WHERE user_id = $1", [userId]);

    if (existingUser.rows.length === 0) {
      return res.status(404).send("User not found");
    }

    const updateUser = await pool.query(
      `UPDATE users SET user_name = $1, user_email = $2, user_password = $3, user_address = $4 WHERE user_id = $5`,
      [user_name, user_email, user_password, user_address, userId]
    );

    return res.status(200).send("User updated successfully");
  } catch (error) {
    return res.status(400).send(error);
  }
});


app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));