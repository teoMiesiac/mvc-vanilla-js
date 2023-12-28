class Observer {
  constructor() {}
  update() {
    throw new Error("update method must be implemented");
  }
}

export default Observer;
