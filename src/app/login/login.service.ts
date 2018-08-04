import { AuthService } from '../core/auth/auth.service';
import { FireService } from '../core/database/fire.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private db: FireService, private auth: AuthService) { }

  loginWithEmail(email: string, password: string){
    console.log(this.db.find(ref => ref.equalTo(email)).snapshotChanges());
  }
}
