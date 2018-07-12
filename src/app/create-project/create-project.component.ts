import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
    selector: 'app-create-project',
    templateUrl: './create-project.component.html',
    styleUrls: ['./create-project.component.css'],
    providers: [AppService]
})
export class CreateProjectComponent implements OnInit {
    listPM = [];
    pmSelected: number;
    selectTechnology: string;
    arrTechnology = [
        "C/C++",
        "Java",
        "Python",
        "Ruby/rail",
        "PHP",
        "Nodejs",
        "React Native",
        ".Net",
        "C#",
        "Swift",
        "Golang",
    ]
    constructor(
        private appService: AppService,
        private router: Router
    ) { 
        this.appService.sendGetPM()
        .then(result => {
            for(var i=0; i< result.length; i++){
                this.listPM[i] = result[i].username;
                this.pmSelected = this.listPM[0];
                this.selectTechnology = "C/C++";
            }
        })
        .catch(error => console.log(error))
    }

    ngOnInit() {}

    onSubmit(form){
        console.log(form.value);
        this.appService.sendCreateProject(form.value)
        .then(result => {
            console.log(result);
             if(result.status == true){
                 alert('Bạn đã tạo mới project thành công.');
                 this.router.navigate(['add-user',result.projectInfo.project_id]);
             }
             else{
                 alert('Dự án chưa được tạo. Bạn hãy thử lại.');
             }
        })
        .catch(error => console.log(error))
    }
}
