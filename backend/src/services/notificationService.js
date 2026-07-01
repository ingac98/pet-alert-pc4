const AlertSubject = require('../patterns/observer/AlertSubject');
const UserObserver = require('../patterns/observer/UserObserver');

const registeredUsers = [
  {
    id: 'U001',
    name: 'Carlos',
    location: {
      lat: -12.0462,
      lng: -77.0429
    },
    radiusKm: 1,
    receivesAlerts: true
  },
  {
    id: 'U002',
    name: 'Maria',
    location: {
      lat: -12.0600,
      lng: -77.0500
    },
    radiusKm: 1,
    receivesAlerts: true
  },
  {
    id: 'U003',
    name: 'Luis',
    location: {
      lat: -12.1000,
      lng: -77.0800
    },
    radiusKm: 1,
    receivesAlerts: false
  }
];

const notifyNearbyUsers = (lostPetAlert) => {
  const subject = new AlertSubject();

  registeredUsers.forEach((user) => {
    subject.attach(new UserObserver(user));
  });

  return subject.notify(lostPetAlert);
};

module.exports = {
  notifyNearbyUsers
};
