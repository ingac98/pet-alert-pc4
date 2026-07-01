const ReportValidator = require('./ReportValidator');

class LocationValidator extends ReportValidator {
  validate(data) {
    if (!data.location) {
      return {
        valid: false,
        message: 'La ubicacion es obligatoria.'
      };
    }

    const { lat, lng } = data.location;

    if (typeof lat !== 'number' || typeof lng !== 'number') {
      return {
        valid: false,
        message: 'La ubicacion debe contener latitud y longitud numericas.'
      };
    }

    return super.validate(data);
  }
}

module.exports = LocationValidator;
