import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-my-dashboard',
    templateUrl: './my-dashboard.component.html',
    styleUrls: ['./my-dashboard.component.css'],
    providers: [AppService]
})
export class MyDashboardComponent implements OnInit {
    listProjects = [];
    constructor(private appService: AppService) { 
        this.appService.sendGetProjects()
        .then(result => {
            var arr = Object.keys(result).map(function(key) {
                return [Number(key), result[key]];
            });
            this.listProjects = arr;
        })
        .catch(error => console.log(error))
    }

    ngOnInit() {
    }

}
