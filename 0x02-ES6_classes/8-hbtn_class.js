export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = locaiton;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') { return this.size; }
    if (hint === 'string') { return this.location; }
  }
}
