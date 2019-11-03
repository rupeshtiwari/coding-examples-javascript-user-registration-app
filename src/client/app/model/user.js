export class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.id = Date.now().toString();
  }
}
