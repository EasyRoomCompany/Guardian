const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString: process.env.POSTGRESS_URL,
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  const { username, email, password, address } = request.body;

  pool.query(
    "INSERT INTO users (username, email, password, address) VALUES ($1, $2, $3, $4) RETURNING *",
    [username, email, password, address],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .json({ message: `User added with ID: ${results.rows[0].id}` });
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { username, email, password, address } = request.body;

  pool.query(
    "UPDATE users SET username = $1, email = $2, password = $3 , address = $4 WHERE id = $5",
    [username, email, password, address, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({ message: `User modified with ID: ${id}` });
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json({ message: `User deleted with ID: ${id}` });
  });
};

const searchUser = (request, response) => {
  const searchTerm = request.query.term;

  pool.query(
    "SELECT * FROM users WHERE username ILIKE $1 OR email ILIKE $1",
    [`%${searchTerm}%`],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  searchUser,
};
