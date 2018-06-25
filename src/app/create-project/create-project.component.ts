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

    constructor(
        private appService: AppService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onSubmit(form){
        this.appService.sendCreateProject(form.value)
        .then(result => {
            console.log(result);
            if(result.status =='true'){
                alert('Bạn đã tạo mới project thành công.');
                this.router.navigate(['add-user']);
            }
            else{
                alert('Dự án chưa được tạo. Bạn hãy thử lại.');
            }
        })
        .catch(error => console.log(error))
    }
}
