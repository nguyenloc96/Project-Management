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

    sendGetProjects(){
        const url = URL + 'get-project';
        const body = '';
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendGetUsers(){
        const url = URL + 'get-user';
        const body = '';
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendCreateProject(value){
        const url = URL + 'create-project';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendLogTimeSheet(value){
        const url = URL + 'log-time-sheet';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendAddUser(value){
        const url = URL + 'add-user';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }
}
