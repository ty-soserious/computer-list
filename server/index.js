const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

const computers = require('./routes/api/computers');
app.use('/api/computers', computers);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
