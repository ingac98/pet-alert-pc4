class ResolvedState {
  getName() {
    return 'RESOLVED';
  }

  canNotify() {
    return false;
  }

  getDescription() {
    return 'La mascota fue encontrada y la alerta fue resuelta.';
  }
}

module.exports = ResolvedState;
