export type Observer = { update: () => void };

class ObserverList {
  observerList: Observer[];

  constructor() {
    this.observerList = [];
  }

  add(obj: Observer) {
    this.observerList.push(obj);
  }

  remove(obj: Observer) {
    this.observerList = this.observerList.filter(
      (observer) => observer === obj
    );
  }

  getAll() {
    return this.observerList;
  }
}

export default ObserverList;
