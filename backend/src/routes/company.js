const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString: process.env.POSTGRESS_URL,
});

const getCompany = (request, response) => {
  pool.query("SELECT * FROM company ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCompanyById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM company WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createCompany = (request, response) => {
  const { razao_social, cnpj, cep, email, logradouro, municipio, bairro, telefone } = request.body;

  pool.query(
    "INSERT INTO company (razao_social, cnpj, cep, email, logradouro, municipio, bairro, telefone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [razao_social, cnpj, cep, email, logradouro, municipio, bairro, telefone],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Room added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateCompany = (request, response) => {
  const id = parseInt(request.params.id);
  const { razao_social, cnpj, cep, email, logradouro, municipio, bairro, telefone } = request.body;

  pool.query(
    "UPDATE company SET user_name = $1, razao_social = $2, cnpj = $3 , cep = $4, email = $5, logradouro = $6, municipio = $7, bairro = $8, telefone = $9 WHERE id = $10",
    [razao_social, cnpj, cep, email, logradouro, municipio, bairro, telefone, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Company modified with ID: ${id}`);
    }
  );
};

const deleteCompany = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM company WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`company deleted with ID: ${id}`);
  });
};

module.exports = {
  getCompany,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
};
