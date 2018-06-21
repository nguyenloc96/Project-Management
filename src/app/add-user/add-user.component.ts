import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    listProjects = [];
    listUsers = [];
    constructor(private appService: AppService) {
        this.appService.sendGetProjects()
            .then(listProject => {
                console.log(listProject);
                this.listProjects = listProject;
            })
            .catch(error => console.log(error))

        this.appService.sendGetUsers()
            .then(listUser => {
                console.log(listUser);
                this.listUsers = listUser;
            })
            .catch(error => console.log(error))
    }
    
    selectedProject = this.listProjects[0];

    ngOnInit() {
    }

}
