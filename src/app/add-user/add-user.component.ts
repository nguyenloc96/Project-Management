import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {  ActivatedRoute,Router } from '@angular/router';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    listProjects = [];
    listUsers = [];
    pid;
    constructor(
        private route: ActivatedRoute,
        private appService: AppService,
        private router: Router

    ) {
        // if(this.route.snapshot.paramMap.get('id')!== null){
        //     this.pid = this.route.snapshot.paramMap.get('id');
        //     this.appService.sendProjectDetail({"project_id":this.pid}).then(result =>{
        //         var arr = Object.keys(result).map(function(key) {
        //             return [Number(key), result[key]];
        //         });
        //         this.listProjects = arr[0][1];
        //     }); 
        //     this.appService.sendGetUsers()
        //     .then(listUser => {
        //         this.listUsers = listUser;
        //     })
        //     .catch(error => console.log(error));
        // }
       // else{
        this.appService.sendGetAll()
            .then(listProject => {
                var arr = Object.keys(listProject).map(function(key) {
                    return [Number(key), listProject[key]];
                });
                this.listProjects = arr;
            })
            .catch(error => console.log(error))

        this.appService.sendGetUsers()
            .then(listUser => {
                this.listUsers = listUser;
            })
            .catch(error => console.log(error))
      //  }
    }
    
    selectProject: number;
    selectUser: number;

    ngOnInit() {
        this.selectProject = 1;
        this.selectUser = 1;
    }

    onSubmit(form){
        console.log(form.value);
        this.appService.sendAddUser(form.value)
            .then(result => {
                if (result.status == 'true') {
                    alert('Bạn đã thêm user vào project thành công.');
                    this.router.navigate(['my-dashboard']);
                }
                else {
                    alert('Thêm thất bại.');
                }
            })
            .catch(error => console.log(error))
    }
}
