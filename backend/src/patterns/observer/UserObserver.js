class UserObserver {
  constructor({ id, name, location, radiusKm, receivesAlerts }) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.radiusKm = radiusKm;
    this.receivesAlerts = receivesAlerts;
  }

  update(lostPetAlert) {
    if (!this.receivesAlerts || !lostPetAlert.canNotify) {
      return null;
    }

    const distance = this.calculateDistanceKm(
      this.location.lat,
      this.location.lng,
      lostPetAlert.location.lat,
      lostPetAlert.location.lng
    );

    if (distance <= this.radiusKm) {
      return {
        userId: this.id,
        userName: this.name,
        message: `Alerta cercana: se reporto como perdida la mascota ${lostPetAlert.name}.`,
        distanceKm: Number(distance.toFixed(2)),
        radiusKm: this.radiusKm
      };
    }

    return null;
  }

  calculateDistanceKm(lat1, lng1, lat2, lng2) {
    const earthRadiusKm = 6371;

    const dLat = this.toRadians(lat2 - lat1);
    const dLng = this.toRadians(lng2 - lng1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) *
        Math.cos(this.toRadians(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadiusKm * c;
  }

  toRadians(value) {
    return value * Math.PI / 180;
  }
}

module.exports = UserObserver;
