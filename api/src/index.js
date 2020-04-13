const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://diegopaiva:lucineide42@cluster0-vc3sa.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);


app.listen(4040);

