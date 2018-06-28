import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-user-projects',
    templateUrl: './user-projects.component.html',
    styleUrls: ['./user-projects.component.css'],
    providers: [AppService]
})
export class UserProjectsComponent implements OnInit {
    listProject = [];
    constructor(
        private appService: AppService,
    ) {
        this.appService.sendUserProjects(
            {
                'user_id': localStorage.getItem('user_id')
            }
        )
            .then(result => {
                console.log(result);
                this.listProject = result;
            })
            .catch(error => console.log(error))
    }

    ngOnInit() {
    }

}
