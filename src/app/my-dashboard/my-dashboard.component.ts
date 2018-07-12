import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
    selector: 'app-my-dashboard',
    templateUrl: './my-dashboard.component.html',
    styleUrls: ['./my-dashboard.component.css'],
    providers: [AppService]
})
export class MyDashboardComponent implements OnInit {
    listProjects = [];
    NumberOfProject = 0;
    NumberOfRunningProject = 0;
    NumberOfSuccessProject = 0;
    NumberOfFailedProject = 0;
    NumberOfUser = 0;
    UserJoinMultiProject  = [] ;
    NumberOfHours = 0;
    constructor(private appService: AppService,
                private route: ActivatedRoute,
                private router: Router
            ) { 
        if(localStorage.getItem('role')!=="ROLE_ADMIN"){
            localStorage.clear();
            this.router.navigate(['login']);
        }
        else{
           console.log(localStorage.getItem('token_user'));
            this.getRunningProject();
            this.sendProjectPage();
            this.getSuccessProject();
            this.getFailedProject();
            this.getNumberOfUser();
            this.getUserMultiProject();
            this.GetSumHours();
            console.log(this.NumberOfProject);
            console.log(this.NumberOfRunningProject);
        }
    }
    sendProjectPage(){
        this.appService.sendProjectPage().then(result =>{
            this.NumberOfProject = result.number;
            console.log(result);
            
        })
    }
    getRunningProject(){
        this.appService.sendCountProjectRunning({"status":"running"}).then(result =>{
            this.NumberOfRunningProject = result.number;
            console.log(result);
        })
    }
    getSuccessProject(){
        this.appService.sendCountProjectRunning({"status":"success"}).then(result =>{
            this.NumberOfSuccessProject = result.number;
            console.log(result);
        })
    }
    getFailedProject(){
        this.appService.sendCountProjectRunning({"status":"failed"}).then(result =>{
            this.NumberOfFailedProject = result.number;
            console.log(result);
        })
    }
    ngOnInit() {
    }
    getUserMultiProject(){
        this.appService.sendUserMultiProject().then(result=>{
            var arr = Object.keys(result).map(function(key) {
                return [key, result[key]];
            });
            this.UserJoinMultiProject = arr;
            console.log(JSON.stringify(arr));
        })
    }
    GetSumHours(){
        this.appService.sendGetSumHours().then(result =>{
            this.NumberOfHours = result;
            console.log(result);
        })
    }
    getNumberOfUser(){
        this.appService.sendGetUserPage().then(result=>{
            this.NumberOfUser = result.number;
        })
    }
}
