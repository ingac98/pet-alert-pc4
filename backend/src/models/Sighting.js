class Sighting {
  constructor({ photo, description, location }) {
    this.id = Date.now().toString();
    this.photo = photo;
    this.description = description || 'Avistamiento anonimo sin descripcion adicional.';
    this.location = location;
    this.reportedBy = 'ANONYMOUS';
    this.createdAt = new Date().toISOString();
  }
}

module.exports = Sighting;
