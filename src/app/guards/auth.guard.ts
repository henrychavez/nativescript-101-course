import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Router } from "@angular/router";
import { ApplicationSettings } from "@nativescript/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    const authToken = ApplicationSettings.getString('authToken');
    if (!!authToken) {
      console.log('token', authToken);
      return true;
    } else {
      // Redirect to the login page if the user is not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }

}
