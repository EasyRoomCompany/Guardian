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

const getUsersById = (request, response) => {
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
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
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
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

const validateLogin = (request, response) => {
  const { username, email, password, address } = req.body;

  try {
    const existingUser = pool.query("SELECT * FROM users WHERE username = $1",[user_name]);
    
    if (existingUser.rows.length === 0) {
      const newLogin = pool.query(
        `INSERT INTO users(username, email, password, address) VALUES ($1, $2, $3, $4)`,
        [username, email, password, address]
      );
      return res.status(200).send(newLogin);
    } else {
      return res.status(200).send("User already exists");
    }

  } catch (error) {
    return response.status(400).send(error);
  }
}

const validateEmailUser = async (req, res) => {
  const { username, email, password, address } = req.body;

  try {
    const existEmail = await pool.query('SELECT * FROM users WHERE username = $1', [user_email]);

    if (existEmail.rows.length !== 0) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    return res.status(400).send("Error: " + error);
  }
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
  validateLogin,
  validateEmailUser,
};
