
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from './user.model';
import { API_URL } from '../app.api';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    user: UserModel;
    isLoggedin: boolean;

    constructor(private http: HttpClient) {

    }

    login(user: string , password: string): Observable<UserModel> {

        let params = new HttpParams().set('logNamespace', user);

        return this.http.get<UserModel>(
            `${API_URL}/accounts`,
            { params: params }
        );

    }

    saveUserToken(): void{
        if (!this.existeToken()) {

        }
    }

    getUserSaved(): void{
        this. user = JSON.parse(sessionStorage.getItem('token'));
    }

    existeToken(): boolean{
        let token = sessionStorage.getItem('token');
        return !(token == undefined || token == '');
    }

    setUser(user: UserModel): void{
        this.user = user;
    }

    getUser(): UserModel{
        return this.user;
    }


}