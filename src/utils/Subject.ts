import ObserverList, { Observer } from "./ObserverList";

class Subject {
  observerList: ObserverList;
  constructor() {
    this.observerList = new ObserverList();
  }

  addObserver(observer: Observer) {
    this.observerList.add(observer);
  }

  removeObserver(observer: Observer) {
    this.observerList.remove(observer);
  }

  notify() {
    this.observerList.getAll().forEach((observer) => {
      observer.update();
    });
  }
}

export default Subject;
