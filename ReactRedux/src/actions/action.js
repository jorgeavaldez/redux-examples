class Action {
  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
  }

  makeClone() {
    return new Action(this.type, this.payload);
  }
}

export default Action;