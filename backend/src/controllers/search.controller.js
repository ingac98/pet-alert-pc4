const ImageSearchContext = require('../patterns/strategy/ImageSearchContext');
const AdoptionSearchStrategy = require('../patterns/strategy/AdoptionSearchStrategy');
const SaleSearchStrategy = require('../patterns/strategy/SaleSearchStrategy');
const LostPetSearchStrategy = require('../patterns/strategy/LostPetSearchStrategy');

const searchByImage = (req, res) => {
  const { image, intention, metadata } = req.body;

  if (!image || image.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'Debe cargar una imagen para realizar la busqueda.'
    });
  }

  const allowedExtensions = ['.jpg', '.jpeg', '.png'];
  const imageLower = image.toLowerCase();

  const isValidImage = allowedExtensions.some((extension) => {
    return imageLower.endsWith(extension);
  });

  if (!isValidImage) {
    return res.status(400).json({
      success: false,
      message: 'La imagen debe tener formato JPG, JPEG o PNG.'
    });
  }

  if (!intention || intention.trim() === '') {
    return res.status(400).json({
      success: false,
      message: 'Debe seleccionar una intencion: ADOPTION, SALE o VERIFY_LOST.'
    });
  }

  const normalizedIntention = intention.toUpperCase();

  let strategy;

  if (normalizedIntention === 'ADOPTION') {
    strategy = new AdoptionSearchStrategy();
  } else if (normalizedIntention === 'SALE') {
    strategy = new SaleSearchStrategy();
  } else if (normalizedIntention === 'VERIFY_LOST') {
    strategy = new LostPetSearchStrategy();
  } else {
    return res.status(400).json({
      success: false,
      message: 'Intencion no valida. Use ADOPTION, SALE o VERIFY_LOST.'
    });
  }

  const searchContext = new ImageSearchContext(strategy);

  const result = searchContext.search(metadata || {});

  return res.json({
    image,
    ...result
  });
};

module.exports = {
  searchByImage
};
