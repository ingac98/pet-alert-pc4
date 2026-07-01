const getSightings = (req, res) => {
  res.json({
    message: 'Listado de avistamientos',
    data: []
  });
};

const createSighting = (req, res) => {
  res.status(201).json({
    message: 'Avistamiento registrado correctamente',
    data: req.body
  });
};

module.exports = {
  getSightings,
  createSighting
};
