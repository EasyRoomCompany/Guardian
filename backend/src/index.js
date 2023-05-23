const express = require("express");
const cors = require('cors');
const { Pool } = require("pg");
require("dotenv").config();

const PORT = 3333;
const pool = new Pool({
  connectionString: process.env.POSTGRESS_URL,
});

const dbUsers = require("./routes/users")
const dbRoom = require("./routes/room")
const dbCompany = require("./routes/company")
const dbReservation = require("./routes/reservation")

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
 * Users
 */
app.get('/users', dbUsers.getUsers);
app.get('/users/:id', dbUsers.getUsers);
app.post('/users', dbUsers.createUser);
app.put('/users/:id', dbUsers.updateUser);
app.delete('/users/:id', dbUsers.deleteUser);
/**
 * Room
 */
app.get('/room',dbRoom.getRoom);
app.get('/room/:id',dbRoom.getRoomById);
app.post('/room',dbRoom.createRoom);
app.put('/room/:id',dbRoom.updateRoom);
app.delete('/room/:id',dbRoom.deleteRoom);

/**
 * Company
 */
app.get('/company',dbCompany.getCompany);
app.get('/company/:id',dbCompany.getCompanyById);
app.post('/company',dbCompany.createCompany);
app.put('/company/:id',dbCompany.updateCompany);
app.delete('/company/:id',dbCompany.deleteCompany);

/**
 * Reservation
 */
app.get('/reservation',dbReservation.getReservation);
app.get('/reservation/:id',dbReservation.getReservationById);
app.post('/reservation',dbReservation.createReservation);
app.put('/reservation/:id',dbReservation.updateReservation);
app.delete('/reservation/:id',dbReservation.deleteReservation);


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



app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));