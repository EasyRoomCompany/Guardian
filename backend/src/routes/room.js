const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString: process.env.POSTGRESS_URL,
});

const getRoom = (request, response) => {
  pool.query("SELECT * FROM room ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getRoomById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM room WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createRoom = (request, response) => {
  const { capacity, description, name, priceHour } = request.body;

  pool.query(
    "INSERT INTO room (capacity, description, name, priceHour) VALUES ($1, $2, $3, $4) RETURNING *",
    [capacity, description, name, priceHour],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Room added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateRoom = (request, response) => {
  const id = parseInt(request.params.id);
  const { capacity, description, name, priceHour } = request.body;

  pool.query(
    "UPDATE room SET capacity = $1, description = $2, name = $3 , priceHour = $4 WHERE id = $5",
    [capacity, description, name, priceHour, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Room modified with ID: ${id}`);
    }
  );
};

const deleteRoom = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM room WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Room deleted with ID: ${id}`);
  });
};

module.exports = {
  getRoom,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};
