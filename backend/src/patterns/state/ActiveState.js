class ActiveState {
  getName() {
    return 'ACTIVE';
  }

  canNotify() {
    return true;
  }

  getDescription() {
    return 'La alerta esta activa y puede generar notificaciones.';
  }
}

module.exports = ActiveState;
