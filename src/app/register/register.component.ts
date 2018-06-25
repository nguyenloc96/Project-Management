import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    constructor(
        private appService: AppService,
        private router: Router
    ) { }
    ngOnInit() {}

    onSubmit(formRegister){
        this.appService.sendRegister(formRegister.value)
        .then(result => {
            console.log(result);
            if(result.status == 'true'){
                alert("Bạn đã đăng kí thành công.");
                this.router.navigate(['login']);
            }
        })
        .catch(error => console.log(error))
    }
}
