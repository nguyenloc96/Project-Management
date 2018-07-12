import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const URL = 'http://localhost:8080/';
const headers = new Headers({ 
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token_user')
});

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
        return this.http.post(url, { headers })
        .toPromise()
        .then(res => res.json())
    }
    sendGetAllProjects(value){
        const url = URL + 'get-all-projects';
        const body = JSON.stringify(value);
        return this.http.post(url,body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendGetUsers(){
        const url = URL + 'get-users';
        return this.http.get(url, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendGetPM(){
        const url = URL + 'get-pm';
        return this.http.get(url, { headers })
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
        const url = URL + 'log-time-sheet/create';
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

    sendProjectDetail(value){
        const url = URL + 'project-detail';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendUserProjects(value){
        const url = URL + 'project/user';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendUserNotes(value){
        const url = URL + 'log-time-sheet/user';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendProjectNotes(value){
        const url = URL + 'log-time-sheet/user/project';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendProjectPage(){
        const url = URL + 'get-project-pages';
        return this.http.get(url, { headers })
        .toPromise()
        .then(res => res.json())
    }
    sendGetAll(){
        const url = URL + 'getAll';
        return this.http.get(url, { headers })
        .toPromise()
        .then(res => res.json())
    }
    sendProjectFilter(value){
        const url = URL + 'project-filter';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    

    sendGetCountLogTimeSheet(selectedField, value_filter) {
        if (selectedField === 'All') {
            const url = URL + 'log-time-sheet/get-count-log';
            return this.http.get(url, {headers}).toPromise().then(res => res.json());
        } else {
            const url = URL + 'log-time-sheet/get-count-filter-log';
            let a = {"field": selectedField, "value": value_filter};
            const body = JSON.stringify( a);
            return this.http.post(url, body, {headers}).toPromise().then(res => res.json());
        }
    }
    sendGetDataPagingLogTimeSheet(from, offset, selectedField, value_filter) {
       if (selectedField === 'All') {
           const url = URL + 'log-time-sheet/get-data-paging';
           let a = {"from":from, "offset": offset};
           const body = JSON.stringify( a);
           return this.http.post(url, body, {headers}).toPromise().then(res => res.json());
       } else {
            const url = URL + 'log-time-sheet/log-time-sheet-filter';
            let a = {"field": selectedField, "value": value_filter, "index_of_page": from, "pageSize": offset};
            const body = JSON.stringify(a);
            return this.http.post(url, body, {headers}).toPromise().then(res => res.json());
       }
    }

    sendGetDataPagingUsers(from, offset, selectedField, value_filter) {
       if (selectedField === 'All') {
           const url = URL + 'user/get-data-user-paging';
           let a = { "from": from, "offset": offset};
           const body = JSON.stringify( a);
           return this.http.post(url, body, {headers}).toPromise().then(res => res.json());
       } else {
           const url = URL + 'user/user-filter';
           let a = {"field": selectedField, "value": value_filter, "index_of_page": from, "pageSize": offset};
           const body = JSON.stringify(a);
           return this.http.post(url, body, {headers}).toPromise().then(res => res.json());
       }
    }

    sendGetCountUsers(selectedField, value_filter) {
       if ( selectedField === 'All' ) {
           const url = URL + 'user/get-count-users';
           return this.http.get(url, {headers}).toPromise().then(res => res.json());
       } else {
           const url = URL + 'user/get-count-filter-user';
           let a = {"field": selectedField, "value": value_filter};
           const body = JSON.stringify( a);
           return this.http.post(url, body, {headers}).toPromise().then(res => res.json());
       }
    }
    sendPostProjectFilterPage(value){
        const url = URL + 'get-project-filter-number';
        const body = JSON.stringify(value);
        return this.http.post(url,body, { headers })
        .toPromise().then(res => res.json())
    }

    sendEndProject(value){
        const url = URL + 'end-project';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }

    sendRemoveUser(value){
        const url = URL + 'remove-user';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }
    
    sendProjectDetailUserList(value){
        const url = URL + 'project-detail-user-list';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }
    sendCountProjectRunning(value){
        const url = URL + 'count-project-running';
        const body = JSON.stringify(value);
        return this.http.post(url, body, { headers })
        .toPromise()
        .then(res => res.json())
    }
    sendUserMultiProject(){
        const url = URL + 'user-multi-project';
        return this.http.get(url, { headers })
        .toPromise()
        .then(res => res.json())
    }
    sendGetUserPage(){
        const url = URL + 'get-user-pages';
        return this.http.get(url, { headers })
        .toPromise()
        .then(res => res.json())
    }
    
    sendGetSumHours(){
        const url = URL + 'log-time-sheet/get-sum-hours';
        return this.http.get(url, { headers })
        .toPromise()
        .then(res => res.json())
    }
}
