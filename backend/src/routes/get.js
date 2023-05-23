const getUsers = async () => {};

const getCompany = async () => {
  return await pool.query("SELECT * FROM company");
};

const getRoom = async () => {
  return await pool.query("SELECT * FROM room");
};

const getReservation = async () => {
  return await pool.query("SELECT * FROM reservation");
};

module.exports = { getUsers, getRoom, getCompany, getReservation };
