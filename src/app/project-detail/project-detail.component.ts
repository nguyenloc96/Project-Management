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
        private router: ActivatedRoute,
        private appService: AppService
    ) { 
        
    }

    ngOnInit() {
        this.router.params.subscribe((params) => {

        });
    }
}
