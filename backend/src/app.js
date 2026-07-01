const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const lostPetRoutes = require('./routes/lostPet.routes');
const sightingRoutes = require('./routes/sighting.routes');
const searchRoutes = require('./routes/search.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API PetAlert PC4 funcionando correctamente'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'PetAlert API',
    version: '1.0.0'
  });
});

app.use('/api/lost-pets', lostPetRoutes);
app.use('/api/sightings', sightingRoutes);
app.use('/api/search', searchRoutes);

module.exports = app;
