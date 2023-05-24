<p align="center" ><img src=".././img/backend.png" width="500px" /></p>

---

# Description

As informed in the main README of the project, here you will find all the necessary guidelines about the backend and database used in the development of the application.

<br/>

# Getting Started

<details>
<summary>
Instructions on how to set up your development environment.
</summary>

###

- [Tools](#tools)
- [Prerequisites](#Prerequisites)
- [Installation](#installation)
- [NPM Packages](#install-npm-packages)
- [Storybook](#install-storybook)
- [Usage](#usage)

</details>

<br/>

## Tools

This project uses for the Backend and Database:

<p>
<a href="https://ubuntu.com"><img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" /></a>
<a href="https://nodejs.org/en"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /></a>
<a href="https://expressjs.com"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /></a>
<a href="https://www.postgresql.org"><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /></a>
<a href="https://vercel.com"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" /></a>
<a href="https://insomnia.rest"><img src="https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white" /></a>
<a href="https://code.visualstudio.com"><img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" /></a>
</p>

<p align="right">(<a href="#getting-started">top</a>)</p>

# Database
The application uses the PostgreSQL database to store information about rooms, users and reservations. Make sure you have the correct credentials set up to access the database.

<p align="right">(<a href="#getting-started">top</a>)</p>

# API endpoints

The backend API provides the following endpoints:

```bash
POST /api/auth/login: Performs a user login.
POST /api/auth/register: Registers a new user.
POST /api/auth/logout: Logs out a user.
GET /api/rooms: Returns the list of available rooms.
POST /api/rooms: Creates a new room.
PUT /api/rooms/{room_id}: Updates the details of an existing room.
DELETE /api/rooms/{room_id}: Deletes an existing room.
GET /api/reservations: Returns the authenticated user's reservations.
POST /api/reservations: Creates a new room reservation.
DELETE /api/reservations/{reservation_id}: Cancels an existing reservation.
```

See the full API documentation for more details on available endpoints.

<p align="right">(<a href="#getting-started">top</a>)</p>

# Tests

<p align="right">(<a href="#getting-started">top</a>)</p>




# Contribution

If you want to contribute to the project, visit the [contributing](/CONTRIBUTING.md) link for more information.

<p align="right">(<a href="#getting-started">top</a>)</p>





