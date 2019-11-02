class User {
  constructor(name) {
    this.name = name;
    this.id = Date.now();
  }
}

exports.module = { User };
