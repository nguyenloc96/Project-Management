import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    constructor(private appService: AppService) { }
    ngOnInit() {}

    onSubmit(formRegister){
        this.appService.sendRegister(formRegister.value)
        .then(result => {
            console.log(result);
            if(result.status == 'success'){}
        })
        .catch(error => console.log(error))
    }
}
