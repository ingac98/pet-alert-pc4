const API_URL = 'http://localhost:4000/api';

export const createLostPet = async (data) => {
  const response = await fetch(`${API_URL}/lost-pets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

export const createSighting = async (data) => {
  const response = await fetch(`${API_URL}/sightings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

export const searchByImage = async (data) => {
  const response = await fetch(`${API_URL}/search/image`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return response.json();
};

export const getLostPets = async () => {
  const response = await fetch(`${API_URL}/lost-pets`);
  return response.json();
};