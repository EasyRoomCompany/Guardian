const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString: process.env.POSTGRESS_URL,
});

const getRoom = (request, response) => {
  pool.query("SELECT * FROM rooms ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getRoomById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM rooms WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createRoom = (request, response) => {
  const { capacity, description, name, price_hour } = request.body;

  pool.query(
    "INSERT INTO rooms (capacity, description, name, price_hour) VALUES ($1, $2, $3, $4) RETURNING *",
    [capacity, description, name, price_hour],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .json({ message: `Room added with ID: ${results.rows[0].id}` });
    }
  );
};

const updateRoom = (request, response) => {
  const id = parseInt(request.params.id);
  const { capacity, description, name, price_hour } = request.body;

  let query = "UPDATE rooms SET";
  let set = [];
  let values = [];

  if (capacity) {
    set.push(` capacity = $${set.length + 1}`);
    values.push(capacity);
  }
  if (description) {
    set.push(` description = $${set.length + 1}`);
    values.push(description);
  }
  if (name) {
    set.push(` name = $${set.length + 1}`);
    values.push(name);
  }
  if (price_hour) {
    set.push(` price_hour = $${set.length + 1}`);
    values.push(price_hour);
  }

  if (!set.length) {
    return response.status(400).send("No fields to update");
  }

  query += set.join(",") + " WHERE id = $" + (set.length + 1);
  values.push(id);

  pool.query(query, values, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({ message: `Room modified with ID: ${id}` });
  });
};

const searchRooms = (request, response) => {
  const searchTerm = request.query.term;

  pool.query(
    "SELECT * FROM rooms WHERE CAST(name AS TEXT) ILIKE $1 OR CAST(description AS TEXT) ILIKE $1",
    [`%${searchTerm}%`],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const deleteRoom = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM rooms WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({ message: `Room deleted with ID: ${id}` });
  });
};

module.exports = {
  getRoom,
  getRoomById,
  createRoom,
  updateRoom,
  searchRooms,
  deleteRoom,
};
