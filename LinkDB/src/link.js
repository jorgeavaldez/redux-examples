class Link {
  constructor(title = '', link = '') {
    this.title = title;
    this.link = link;

    this.faved = false;
    this.watched = false;
  }

  watch() {
    this.watched = true;
    return this;
  }

  fav() {
    this.faved = !this.faved;
    return this;
  }
}

module.exports = Link;