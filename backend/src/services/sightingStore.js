const sightings = [];

const saveSighting = (sighting) => {
  sightings.push(sighting);
  return sighting;
};

const getAllSightings = () => {
  return sightings;
};

module.exports = {
  saveSighting,
  getAllSightings
};
