const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Users = require('./routes/Users');
app.use('/users', Users);

app.listen(PORT, () => {
    console.log('Server is ready at port ' + PORT);
});
