const ReportValidator = require('./ReportValidator');

class ImageValidator extends ReportValidator {
  validate(data) {
    const allowedExtensions = ['.jpg', '.jpeg', '.png'];
    const photo = data.photo.toLowerCase();

    const isValidImage = allowedExtensions.some((extension) => {
      return photo.endsWith(extension);
    });

    if (!isValidImage) {
      return {
        valid: false,
        message: 'La foto debe tener formato JPG, JPEG o PNG.'
      };
    }

    return super.validate(data);
  }
}

module.exports = ImageValidator;
