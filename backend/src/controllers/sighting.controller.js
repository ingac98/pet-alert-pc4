const CreateSightingCommand = require('../patterns/command/CreateSightingCommand');
const { getAllSightings } = require('../services/sightingStore');

const getSightings = (req, res) => {
  res.json({
    message: 'Listado de avistamientos anonimos',
    total: getAllSightings().length,
    data: getAllSightings()
  });
};

const createSighting = (req, res) => {
  const command = new CreateSightingCommand(req.body);
  const result = command.execute();

  if (!result.success) {
    return res.status(400).json(result);
  }

  return res.status(201).json(result);
};

module.exports = {
  getSightings,
  createSighting
};
