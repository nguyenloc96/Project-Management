import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-main-screen',
  templateUrl: './user-main-screen.component.html',
  styleUrls: ['./user-main-screen.component.css'],
  providers: [AppService]
})
export class UserMainScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
