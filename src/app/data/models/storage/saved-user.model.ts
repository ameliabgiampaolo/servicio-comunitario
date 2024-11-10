export class SavedUserModel {
  username: string;
  course: string;
  rol: string;

  constructor(username = '', course = '', rol = '') {
    this.username = username;
    this.course = course;
    this.rol = rol;
  }
}
