const CreateLostPetCommand = require('../patterns/command/CreateLostPetCommand');

const {
  getAllLostPets,
  getActiveLostPets,
  updateLostPetStatus
} = require('../services/lostPetStore');

const ActiveState = require('../patterns/state/ActiveState');
const ResolvedState = require('../patterns/state/ResolvedState');
const ExpiredState = require('../patterns/state/ExpiredState');

const getLostPets = (req, res) => {
  res.json({
    message: 'Listado de mascotas perdidas',
    total: getAllLostPets().length,
    data: getAllLostPets()
  });
};

const getActivePets = (req, res) => {
  res.json({
    message: 'Listado de alertas activas',
    total: getActiveLostPets().length,
    data: getActiveLostPets()
  });
};

const createLostPet = (req, res) => {
  const command = new CreateLostPetCommand(req.body);
  const result = command.execute();

  if (!result.success) {
    return res.status(400).json(result);
  }

  return res.status(201).json(result);
};

const changeLostPetStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  let state;

  if (status === 'ACTIVE') {
    state = new ActiveState();
  } else if (status === 'RESOLVED') {
    state = new ResolvedState();
  } else if (status === 'EXPIRED') {
    state = new ExpiredState();
  } else {
    return res.status(400).json({
      success: false,
      message: 'Estado no valido. Use ACTIVE, RESOLVED o EXPIRED.'
    });
  }

  const updatedPet = updateLostPetStatus(id, state.getName());

  if (!updatedPet) {
    return res.status(404).json({
      success: false,
      message: 'No se encontro una mascota perdida con ese ID.'
    });
  }

  updatedPet.stateDescription = state.getDescription();
  updatedPet.canNotify = state.canNotify();

  return res.json({
    success: true,
    message: 'Estado de alerta actualizado correctamente.',
    data: updatedPet
  });
};

module.exports = {
  getLostPets,
  getActivePets,
  createLostPet,
  changeLostPetStatus
};
