const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString: process.env.POSTGRESS_URL,
});

const getReservation = (request, response) => {
  pool.query("SELECT * FROM reservation ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getReservationById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM reservation WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createReservation = (request, response) => {
  const { eventcategory, data, initialhour, finishhour, room_id , id_user, accesskey, status} = request.body;

  pool.query(
    "INSERT INTO reservation (eventcategory, data, initialhour, finishhour, room_id , id_user, accesskey, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [eventcategory, data, initialhour, finishhour, room_id , id_user, accesskey, status],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Reservation added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateReservation = (request, response) => {
  const id = parseInt(request.params.id);
  const { eventcategory, data, initialhour, finishhour, room_id , id_user, accesskey, status } = request.body;

  pool.query(
    "UPDATE reservation SET eventcategory = $1, data = $2, initialhour = $3 , finishhour = $4, room_id = $5, id_user = $6, accesskey = $7, status = $8 WHERE id = $9",
    [eventcategory, data, initialhour, finishhour, room_id , id_user, accesskey, status, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Reservation modified with ID: ${id}`);
    }
  );
};

const deleteReservation = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM reservation WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Reservation deleted with ID: ${id}`);
  });
};

module.exports = {
  getReservation,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation
};
