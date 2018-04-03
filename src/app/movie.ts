export class Movie {
  id: number;
  name: string;
  constructor(userId: number, userName: string) {
    this.id = userId;
    this.name = userName;
  }
}
