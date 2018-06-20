import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AppService]
})
export class LoginComponent implements OnInit {

    constructor(private appService: AppService) { }
    ngOnInit() {}

    onSubmit(formLogin){
        this.appService.sendLogin(formLogin.value)
        .then(result => {
            console.log(result);
        })
        .catch(error => console.log(error))
    }
   
}
