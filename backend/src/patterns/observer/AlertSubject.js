class AlertSubject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  notify(lostPetAlert) {
    const notifications = [];

    for (const observer of this.observers) {
      const notification = observer.update(lostPetAlert);

      if (notification) {
        notifications.push(notification);
      }
    }

    return notifications;
  }
}

module.exports = AlertSubject;
