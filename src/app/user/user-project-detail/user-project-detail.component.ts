import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-user-project-detail',
    templateUrl: './user-project-detail.component.html',
    styleUrls: ['./user-project-detail.component.css'],
    providers: [AppService]
})
export class UserProjectDetailComponent implements OnInit {
    projectDetail = [];
    listUser = [];
    projectID;
    items = 10;
    maxpage = 0;

    constructor(
        private route: ActivatedRoute,
        private appService: AppService
    ) {
        const id = {
            "project_id": +this.route.snapshot.paramMap.get('id')
        };

        this.appService.sendProjectDetail(id)
            .then(result => {
                var arr = Object.keys(result).map(function (key) {
                    return [key, result[key]];
                });
                this.projectDetail = arr[0][1];
                this.listUser = arr[1][1];
                console.log(result);
            })
            .catch(error => console.log(error))
    }
    getUserlist(index){
        this.appService.sendProjectDetailUserList({"project_id":this.route.snapshot.paramMap.get('id'),"index_of_page":index}).then(result =>{
            var arr = Object.keys(result).map(function(key) {
                return [key, result[key]];
            });
            
            this.listUser = arr[1][1];
            this.maxpage = arr[2][1];
            
        })
       
    }
    pageChanged(index){
        
        this.getUserlist(index);
    }
    ngOnInit() { }
}
