import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authservice: AuthGuardService, private router: Router){

  }

  canActivate() : boolean{
    if(!this.authservice.getToken()){
      this.router.navigateByUrl('');
      return false;
    }

    return true;
  }

}
