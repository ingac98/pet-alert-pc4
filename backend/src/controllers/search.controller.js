const searchByImage = (req, res) => {
  const { intention } = req.body;

  res.json({
    message: 'Busqueda por imagen simulada',
    intention,
    results: []
  });
};

module.exports = {
  searchByImage
};
