const express = require('express');
const routes = express.Router();
const multer = require('multer');
const uploadConfig = require('./config/upload')
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const ProfileController = require('./controllers/ProfileController');
const BookingController = require('./controllers/BookingController');

const upload = multer(uploadConfig);

routes.get('/', (request, response) => {
    response.json({message: 'Vai Corinthians'});
});

routes.post('/sessions', SessionController.store);
routes.post('/spot', upload.single('thumbnail'), SpotController.store);
routes.get('/spot', SpotController.index);

routes.get('/profile', ProfileController.show);
routes.post('/spot/:spot_id/booking', BookingController.store);

module.exports = routes;