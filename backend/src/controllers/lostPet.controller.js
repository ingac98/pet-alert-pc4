const getLostPets = (req, res) => {
  res.json({
    message: 'Listado de mascotas perdidas',
    data: []
  });
};

const createLostPet = (req, res) => {
  res.status(201).json({
    message: 'Mascota perdida registrada correctamente',
    data: req.body
  });
};

module.exports = {
  getLostPets,
  createLostPet
};
