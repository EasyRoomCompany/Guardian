const express = require("express");
const cors = require('cors');
const { Pool } = require("pg");
require("dotenv").config();

const PORT = 3333;
const pool = new Pool({
  connectionString: process.env.POSTGRESS_URL,
});

const dbUsers = require("./routes/users")
const dbRooms = require("./routes/rooms")
const dbCompanies = require("./routes/companies")
const dbReservations = require("./routes/reservations")

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
app.get('/rooms',dbRooms.getRoom);
app.get('/rooms/:id',dbRooms.getRoomById);
app.post('/rooms',dbRooms.createRoom);
app.put('/rooms/:id',dbRooms.updateRoom);
app.delete('/rooms/:id',dbRooms.deleteRoom);

/**
 * Company
 */
app.get('/companies',dbCompanies.getCompany);
app.get('/companies/:id',dbCompanies.getCompanyById);
app.post('/companies',dbCompanies.createCompany);
app.put('/companies/:id',dbCompanies.updateCompany);
app.delete('/companies/:id',dbCompanies.deleteCompany);

/**
 * Reservation
 */
app.get('/reservations',dbReservations.getReservation);
app.get('/reservations/:id',dbReservations.getReservationById);
app.post('/reservations',dbReservations.createReservation);
app.put('/reservations/:id',dbReservations.updateReservation);
app.delete('/reservations/:id',dbReservations.deleteReservation);


/**
 * Validations
 */

app.get('/login/:id', dbUsers.validateLogin);
app.post('/users/validate-email', dbUsers.validateEmailUser);



app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));