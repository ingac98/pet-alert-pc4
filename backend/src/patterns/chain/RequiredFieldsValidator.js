const ReportValidator = require('./ReportValidator');

class RequiredFieldsValidator extends ReportValidator {
  validate(data) {
    const requiredFields = ['name', 'species', 'breed', 'photo', 'description'];

    for (const field of requiredFields) {
      if (!data[field] || data[field].toString().trim() === '') {
        return {
          valid: false,
          message: 'El campo ' + field + ' es obligatorio.'
        };
      }
    }

    return super.validate(data);
  }
}

module.exports = RequiredFieldsValidator;
