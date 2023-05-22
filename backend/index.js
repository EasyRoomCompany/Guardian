const express = require('express');
const app = express();
const port = 8000;
const host = `http://localhost:${port}`;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("so testando")
});

app.post('/sala', (req, res) => {
    res.send(JSON.stringify(req.body))
})

app.listen(port, () => {
    console.log(`Executando no link: ${host}`)
});

module.exports = app;