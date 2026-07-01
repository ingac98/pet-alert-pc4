const Sighting = require('../../models/Sighting');
const { saveSighting } = require('../../services/sightingStore');

class CreateSightingCommand {
  constructor(data) {
    this.data = data;
  }

  execute() {
    if (!this.data.photo || this.data.photo.trim() === '') {
      return {
        success: false,
        message: 'La foto del avistamiento es obligatoria.'
      };
    }

    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const photo = this.data.photo.toLowerCase();

    const isValidImage = allowedExtensions.some((extension) => {
      return photo.endsWith(extension);
    });

    if (!isValidImage) {
      return {
        success: false,
        message: 'La foto debe tener formato JPG, JPEG o PNG.'
      };
    }

    if (!this.data.location) {
      return {
        success: false,
        message: 'La ubicacion del avistamiento es obligatoria.'
      };
    }

    const { lat, lng } = this.data.location;

    if (typeof lat !== 'number' || typeof lng !== 'number') {
      return {
        success: false,
        message: 'La ubicacion debe contener latitud y longitud numericas.'
      };
    }

    const sighting = new Sighting(this.data);
    const savedSighting = saveSighting(sighting);

    return {
      success: true,
      message: 'Avistamiento anonimo registrado correctamente.',
      data: savedSighting
    };
  }
}

module.exports = CreateSightingCommand;
