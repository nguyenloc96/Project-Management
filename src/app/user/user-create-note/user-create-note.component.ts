import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-create-note',
    templateUrl: './user-create-note.component.html',
    styleUrls: ['./user-create-note.component.css'],
    providers: [AppService]
})
export class UserCreateNoteComponent implements OnInit {
    listProjects = [];
    listJobs = ['task', 'fix bug', 'other'];
    selectProject: Number;
    selectJob: String;

    constructor(
        private appService: AppService,
        private router: Router
    ) {
        this.appService.sendUserProjects(
            {
                'user_id': localStorage.getItem('user_id')
            }
        )
            .then(result => {
                console.log(result);
                this.listProjects = result;
            })
            .catch(error => console.log(error))
    }

    ngOnInit() {
        this.selectProject = 1;
        this.selectJob = 'task';
    }

    onSubmit(form) {
        const dataRequest = form.value;
        dataRequest.user_id = parseInt(localStorage.getItem('user_id'));
        console.log(dataRequest);
        this.appService.sendLogTimeSheet(dataRequest)
            .then(result => {
                if (result.status == true) {
                    alert('Bạn đã tạo chú thích thành công.');
                    this.router.navigate(['user/user-notes']);
                }
                else {
                    alert('Tạo chú thích không thành công.');
                }
            })
            .catch(error => console.log(error))
    }
}
