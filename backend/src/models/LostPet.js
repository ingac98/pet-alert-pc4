class LostPet {
  constructor({ name, species, breed, photo, description, location }) {
    this.id = Date.now().toString();
    this.name = name;
    this.species = species;
    this.breed = breed;
    this.photo = photo;
    this.description = description;
    this.location = location;
    this.status = 'ACTIVE';
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
}

module.exports = LostPet;
