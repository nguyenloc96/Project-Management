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
    massage: string;
    className: string;
    constructor(
        private appService: AppService,
        private router: Router
    ) {
    }

    ngOnInit() { 
    }



    onSubmit(formLogin) {
        this.className = '';
        this.appService.sendLogin(formLogin.value)
            .then(result => {
                this.className = 'show';
                if (result.token != null) {
                    localStorage.setItem('token_user', result.token);
                    localStorage.setItem('user_id', result.profile.id + '');
                    localStorage.setItem('user_name', result.profile.username);
                    localStorage.setItem('role', result.profile.role);
                    this.massage = 'Bạn đã đăng nhập thành công';
                    setTimeout(() => {
                        this.className = '';
                        if (result.profile.role === "ROLE_ADMIN") {
                            this.router.navigate(['my-dashboard']);
                        } else {
                            this.router.navigate(['user']);
                        }
                    }, 1000);
                    /*
                        
                    */
                }
                else {
                    this.massage = 'Đăng nhập thất bại. Bạn hãy kiểm tra lại Email/ Password.';
                    setTimeout(() => {
                        this.className = '';
                        this.router.navigate(['login']);
                    }, 1000);
                    
                }
            })
            .catch(error => console.log(error))
    }

}
