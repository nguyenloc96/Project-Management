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
    constructor(
        private appService: AppService,
        private router: Router
    ) { 
        
    }

    ngOnInit() {}

    onSubmit(formLogin){
        this.appService.sendLogin(formLogin.value)
        .then(result => {
            console.log(result);
            if(result.token != null){
                console.log(result);
                localStorage.setItem('token_user', result.token);
                localStorage.setItem('user_id', result.profile.id + '');
                localStorage.setItem('user_name', result.profile.username);
                localStorage.setItem('role', result.profile.role);
                alert('Đăng nhập thành công.');
                if(result.profile.role === "ROLE_ADMIN"){
                    this.router.navigate(['my-dashboard']);
                }else{
                    this.router.navigate(['user']);
                }
            }
            else{
                alert('Đăng nhập thất bại. Bạn hãy kiểm tra lại Email/ Password.');
                this.router.navigate(['login']);
            }
        })
        .catch(error => console.log(error))
    }

}
