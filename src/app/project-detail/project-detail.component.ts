import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.css'],
    providers: [AppService]
})
export class ProjectDetailComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private appService: AppService
    ) { 
        const id = {
            "project_id":+this.route.snapshot.paramMap.get('id')
        };
        
        this.appService.sendProjectDetail(id)
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log(error))
    }

    ngOnInit() {}
}
