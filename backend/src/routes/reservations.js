const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString: process.env.POSTGRESS_URL,
});

// const getReservation = (request, response) => {
//   pool.query("SELECT * FROM reservations ORDER BY id ASC", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

const getReservation = (request, response) => {
  pool.query(
    `
    SELECT reservations.id, reservations.event_category, reservations.date,
           reservations.start_time, reservations.end_time,
           reservations.access_key, reservations.status,
           users.id AS user_id, users.username AS user_name,
           rooms.id AS room_id, rooms.name AS room_name
    FROM reservations
    INNER JOIN users ON reservations.users_id = users.id
    INNER JOIN rooms ON reservations.rooms_id = rooms.id
    ORDER BY reservations.id ASC
  `,
    (error, results) => {
      if (error) {
        throw error;
      }

      const reservations = results.rows.map((row) => {
        const {
          id,
          event_category,
          date,
          start_time,
          end_time,
          access_key,
          status,
          user_id,
          user_name,
          room_id,
          room_name,
        } = row;

        return {
          id,
          event_category,
          date,
          start_time,
          end_time,
          access_key,
          status,
          user: {
            id: user_id,
            username: user_name,
          },
          room: {
            id: room_id,
            name: room_name,
          },
        };
      });

      response.status(200).json(reservations);
    }
  );
};

const getReservationById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM reservations WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createReservation = (request, response) => {
  const { event_category, date, start_time, rooms_id, users_id } = request.body;

  // Automatically set status to 'Confirmed'
  const status = "Confirmed";

  // Generate a random access_key of 6 digits
  const access_key = Math.floor(100000 + Math.random() * 900000).toString();

  // Calculate end_time as one hour after start_time
  const startTime = new Date(`1970-01-01T${start_time}Z`);
  startTime.setHours(startTime.getHours() + 1);
  const end_time = startTime.toISOString().substring(11, 16);

  pool.query(
    "INSERT INTO reservations (event_category, date, start_time, end_time, rooms_id , users_id, access_key, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
    [
      event_category,
      date,
      start_time,
      end_time,
      rooms_id,
      users_id,
      access_key,
      status,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).json({
        message: `Reservation added with ID: ${results.rows[0].id} and access key: ${access_key}`,
      });
    }
  );
};

const updateReservation = (request, response) => {
  const id = parseInt(request.params.id);
  const {
    event_category,
    date,
    start_time,
    end_time,
    rooms_id,
    users_id,
    access_key,
    status,
  } = request.body;

  pool.query(
    "UPDATE reservations SET event_category = $1, date = $2, start_time = $3 , end_time = $4, rooms_id = $5, users_id = $6, access_key = $7, status = $8 WHERE id = $9",
    [
      event_category,
      date,
      start_time,
      end_time,
      rooms_id,
      users_id,
      access_key,
      status,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(200)
        .json({ message: `Reservation modified with ID: ${id}` });
    }
  );
};

const deleteReservation = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "DELETE FROM reservations WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(200)
        .json({ message: `Reservation deleted with ID: ${id}` });
    }
  );
};

const searchEvent = (request, response) => {
  const searchTerm = request.query.term;

  pool.query(
    "SELECT * FROM reservations WHERE event_category ILIKE $1 OR status ILIKE $1",
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
  getReservation,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation,
  searchEvent,
};
