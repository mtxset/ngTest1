export class AuthService
{

  loggedIn = false;

  isAuth()
  {
    const promise = new Promise( (resolve, reject) =>
    {
      setTimeout( () => { resolve(this.loggedIn) }, 10 );
    })

    return promise;
  }

  login() { this.loggedIn = true; }

  logoff() { this.loggedIn = false; }
}
