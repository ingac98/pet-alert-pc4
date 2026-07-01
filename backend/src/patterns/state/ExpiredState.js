class ExpiredState {
  getName() {
    return 'EXPIRED';
  }

  canNotify() {
    return false;
  }

  getDescription() {
    return 'La alerta expiro y ya no genera notificaciones.';
  }
}

module.exports = ExpiredState;
