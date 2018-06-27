import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-user-projects',
    templateUrl: './user-projects.component.html',
    styleUrls: ['./user-projects.component.css'],
    providers: [AppService]
})
export class UserProjectsComponent implements OnInit {

    constructor(
        private appService: AppService,
    ) {
        this.appService.sendUserProjects(
            {
                'token': localStorage.getItem('token_user')
            }
        )
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log(error))
    }

    ngOnInit() {
    }

}
