/**
* Model class which defines how our object should look when creating new admins.
*/
export class AdminFull {

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string
  ) { }
}
