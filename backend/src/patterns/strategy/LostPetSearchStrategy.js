const { getActiveLostPets } = require('../../services/lostPetStore');

class LostPetSearchStrategy {
  search(metadata) {
    const activePets = getActiveLostPets();

    const results = activePets.filter((pet) => {
      const sameSpecies = metadata.species
        ? pet.species.toLowerCase() === metadata.species.toLowerCase()
        : true;

      const sameBreed = metadata.breed
        ? pet.breed.toLowerCase() === metadata.breed.toLowerCase()
        : true;

      return sameSpecies && sameBreed;
    });

    return {
      success: true,
      intention: 'VERIFY_LOST',
      message: 'Busqueda contrastada con la base de datos de alertas activas.',
      metadataUsed: metadata,
      totalMatches: results.length,
      results
    };
  }
}

module.exports = LostPetSearchStrategy;
