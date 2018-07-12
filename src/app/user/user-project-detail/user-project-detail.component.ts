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
    removeUser = {'project_ID':"",'user_ID':""};
    removelist =[];
    maxpage = 0;
    isPM = false;
    constructor(
        private route: ActivatedRoute,
        private appService: AppService
    ) {
        const id = {
            "project_id": +this.route.snapshot.paramMap.get('id')
        };
        if(localStorage.getItem("role")==='ROLE_PM') this.isPM = true;
        else this.isPM = false;
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
    KickUser(uid){
    
 
        this.removeUser.project_ID = this.route.snapshot.paramMap.get('id');
        this.removeUser.user_ID = uid;
        this.removelist[0] = this.removeUser;
      //  console.log(JSON.stringify(this.removelist));
        this.appService.sendRemoveUser(this.removelist).then(result =>{
            console.log(result);
        });
    }
    pageChanged(index){
        this.getUserlist(index);
    }
    isPmUser(){
        return this.isPM;
    }
    ngOnInit() { }
}
