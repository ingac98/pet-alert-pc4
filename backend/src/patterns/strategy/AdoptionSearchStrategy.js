class AdoptionSearchStrategy {
  search(metadata) {
    const results = [
      {
        id: 'ONG-001',
        name: 'Protectora Patitas Unidas',
        type: 'ONG',
        petName: 'Luna',
        species: metadata.species || 'Perro',
        breed: metadata.breed || 'Mestizo',
        status: 'Disponible para adopcion'
      },
      {
        id: 'ONG-002',
        name: 'Refugio Huellitas',
        type: 'ONG',
        petName: 'Toby',
        species: metadata.species || 'Gato',
        breed: metadata.breed || 'Mestizo',
        status: 'Disponible para adopcion'
      }
    ];

    return {
      success: true,
      intention: 'ADOPTION',
      message: 'Resultados obtenidos exclusivamente desde catalogos de protectoras y ONGs.',
      results
    };
  }
}

module.exports = AdoptionSearchStrategy;
