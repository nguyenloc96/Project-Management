import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    listProjects = [];
    listUsers = [];
    constructor(
        private appService: AppService,
        private router: Router
    ) {
        this.appService.sendGetProjects()
            .then(listProject => {
                this.listProjects = listProject;
            })
            .catch(error => console.log(error))

        this.appService.sendGetUsers()
            .then(listUser => {
                this.listUsers = listUser;
            })
            .catch(error => console.log(error))
    }
    
    selectProject: number;
    selectUser: number;

    ngOnInit() {
        this.selectProject = 1;
        this.selectUser = 1;
    }

    onSubmit(form){
        console.log(form.value);
        this.appService.sendAddUser(form.value)
            .then(result => {
                if (result.status == 'true') {
                    alert('Bạn đã thêm user vào project thành công.');
                    this.router.navigate(['my-dashboard']);
                }
                else {
                    alert('Thêm thất bại.');
                }
            })
            .catch(error => console.log(error))
    }
}
