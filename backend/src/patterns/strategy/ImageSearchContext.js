class ImageSearchContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  search(metadata) {
    if (!this.strategy) {
      return {
        success: false,
        message: 'No se definio una estrategia de busqueda.'
      };
    }

    return this.strategy.search(metadata);
  }
}

module.exports = ImageSearchContext;
