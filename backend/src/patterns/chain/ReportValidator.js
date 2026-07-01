class ReportValidator {
  setNext(nextValidator) {
    this.nextValidator = nextValidator;
    return nextValidator;
  }

  validate(data) {
    if (this.nextValidator) {
      return this.nextValidator.validate(data);
    }

    return {
      valid: true,
      message: 'Validacion completada correctamente.'
    };
  }
}

module.exports = ReportValidator;
