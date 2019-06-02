const express = require('express');
const moongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

moongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-fwi6w.mongodb.net/omnistack?retryWrites=true',
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'))

app.listen(process.env.PORT || 8080);