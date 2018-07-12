import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
    user:string;
    constructor() {
        console.log(localStorage.getItem('token_user'));
        this.user = localStorage.getItem('user_name');
    }

    ngOnInit() {
    }

}
