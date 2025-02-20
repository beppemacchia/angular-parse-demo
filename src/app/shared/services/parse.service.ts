import { Injectable } from '@angular/core';
import { InstallationModel } from '../models/installation.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ParseService {
  constructor() {}

  public registerSubclasses(): void {
    InstallationModel.registerParseSubclass();
    UserModel.registerParseSubclass();
  }

  public login(email: string, password: string): Promise<UserModel | undefined> {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return UserModel.logIn(email, password) as Promise<UserModel>;
  }

  public logout(): Promise<UserModel> {
    return UserModel.logOut<UserModel>();
  }
}
