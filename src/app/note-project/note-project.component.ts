import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
    selector: 'app-note-project',
    templateUrl: './note-project.component.html',
    styleUrls: ['./note-project.component.css'],
    providers: [AppService]
})
export class NoteProjectComponent implements OnInit {
    projectID: number;
    projectName: string;
    listNotes = [];
    constructor(
        private appService: AppService,
        private route: ActivatedRoute
    ) {
        this.appService.sendProjectNotes({
            'project_id': +this.route.snapshot.paramMap.get('id')
        })
            .then(result => {
                this.listNotes = result.listLogTime;
                this.projectID = result.project_id;
                this.projectName = result.projectName;
            })
            .catch(error => console.log(error))
    }

    ngOnInit() {
    }

}
