class SaleSearchStrategy {
  search(metadata) {
    const results = [
      {
        id: 'BREEDER-001',
        name: 'Criadero Canino Certificado Lima',
        type: 'Criadero certificado',
        certificationCode: 'CERT-LIM-2026-001',
        species: metadata.species || 'Perro',
        breed: metadata.breed || 'Golden Retriever',
        status: 'Certificacion vigente'
      },
      {
        id: 'BREEDER-002',
        name: 'Criadero Felino Andino',
        type: 'Criadero certificado',
        certificationCode: 'CERT-LIM-2026-002',
        species: metadata.species || 'Gato',
        breed: metadata.breed || 'Persa',
        status: 'Certificacion vigente'
      }
    ];

    return {
      success: true,
      intention: 'SALE',
      message: 'Resultados filtrados solo por criaderos comerciales legalmente certificados.',
      results
    };
  }
}

module.exports = SaleSearchStrategy;
