const LostPet = require('../../models/LostPet');
const ActiveState = require('../state/ActiveState');

const RequiredFieldsValidator = require('../chain/RequiredFieldsValidator');
const LocationValidator = require('../chain/LocationValidator');
const ImageValidator = require('../chain/ImageValidator');

const { saveLostPet } = require('../../services/lostPetStore');
const { notifyNearbyUsers } = require('../../services/notificationService');

class CreateLostPetCommand {
  constructor(data) {
    this.data = data;
  }

  execute() {
    const requiredFieldsValidator = new RequiredFieldsValidator();
    const locationValidator = new LocationValidator();
    const imageValidator = new ImageValidator();

    requiredFieldsValidator
      .setNext(locationValidator)
      .setNext(imageValidator);

    const validationResult = requiredFieldsValidator.validate(this.data);

    if (!validationResult.valid) {
      return {
        success: false,
        message: validationResult.message
      };
    }

    const activeState = new ActiveState();
    const lostPet = new LostPet(this.data);

    lostPet.status = activeState.getName();
    lostPet.stateDescription = activeState.getDescription();
    lostPet.canNotify = activeState.canNotify();

    const savedLostPet = saveLostPet(lostPet);

    const notifications = notifyNearbyUsers(savedLostPet);

    return {
      success: true,
      message: 'Mascota perdida registrada correctamente.',
      data: savedLostPet,
      notifications: {
        total: notifications.length,
        items: notifications
      }
    };
  }
}

module.exports = CreateLostPetCommand;
