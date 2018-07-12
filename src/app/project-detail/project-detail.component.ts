import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import {Directive} from '@angular/core';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.css'],
    providers: [AppService]

})
export class ProjectDetailComponent implements OnInit {
    projectDetail = [];
    listUser = [];
    removeUser = {'project_ID':"",'user_ID':""};
    removelist =[];
    value = {'project_id':"",'status':"",'notes':""};
    projectID;
    items = 10;
    maxpage=0;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private appService: AppService
    ) { 
        this.projectID = {
            "project_id":+this.route.snapshot.paramMap.get('id')
        };

        this.appService.sendProjectDetail(this.projectID)
            .then(result => {
                var arr = Object.keys(result).map(function(key) {
                    return [key, result[key]];
                });
                this.projectDetail = arr[0][1];
                this.listUser = arr[1][1];
                console.log(this.projectDetail);
                console.log(this.listUser);
            })
            .catch(error => console.log(error))

    }
    
    onClick(){
        alert(this.listUser);
    }
    onSubmit(formEndProject){
        alert(JSON.stringify(formEndProject.value));
    }
    setEndProject(form){
      
        this.value.project_id = this.route.snapshot.paramMap.get('id');
        this.value.status = form.value.status;
        this.value.notes = form.value.notes;
        console.log(JSON.stringify(this.value));
        this.appService.sendEndProject(this.value).then(result =>{
            console.log(result);
        })
        this.router.navigate([`my-dashboard`])
    }
    AddUser(){
        this.router.navigate([`add-user`])
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
    ngOnInit() {}
}
