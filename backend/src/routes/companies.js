const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString: process.env.POSTGRESS_URL,
});

const getCompany = (request, response) => {
  pool.query("SELECT * FROM companies ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCompanyById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM companies WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createCompany = (request, response) => {
  const { business_name, cnpj, postal_code, email, address, city, neighborhood, telephone } = request.body;

  pool.query(
    "INSERT INTO companies (business_name, cnpj, postal_code, email, address, city, neighborhood, telephone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [business_name, cnpj, postal_code, email, address, city, neighborhood, telephone],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`company added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateCompany = (request, response) => {
  const id = parseInt(request.params.id);
  const { business_name, cnpj, postal_code, email, address, city, neighborhood, telephone } = request.body;

  pool.query(
    "UPDATE companies SET user_name = $1, business_name = $2, cnpj = $3 , postal_code = $4, email = $5, address = $6, city = $7, neighborhood = $8, telephone = $9 WHERE id = $10",
    [business_name, cnpj, postal_code, email, address, city, neighborhood, telephone, id],
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

  pool.query('DELETE FROM companies WHERE id = $1', [id], (error, results) => {
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
