import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AppService]
})
export class LoginComponent implements OnInit {
    token = '';
    id = 0;
    constructor(
        private appService: AppService,
        private router: Router
    ) { }
    ngOnInit() {}

    onSubmit(formLogin){
        this.appService.sendLogin(formLogin.value)
        .then(result => {
            console.log(result);
            if(result.token != null){
                this.token = result.token;
                this.id = result.profile.id;
                console.log(this.token, this.id);
                alert('Đăng nhập thành công.');
                this.router.navigate(['my-dashboard']);
            }
            else{
                alert('Đăng nhập thất bại. Bạn hãy kiểm tra lại Email/ Password.');
                this.router.navigate(['login']);
            }
        })
        .catch(error => console.log(error))
    }

}
