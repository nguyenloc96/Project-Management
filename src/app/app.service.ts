import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const URL = 'http://localhost:3000/';
const headers = new Headers({ 'Content-Type': 'application/json' });

@Injectable({
    providedIn: 'root'
})

export class AppService {

    constructor(private http: Http) { }

    sendLogin(value){
        const url = URL + 'login';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendRegister(value){
        const url = URL + 'register';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }
}
