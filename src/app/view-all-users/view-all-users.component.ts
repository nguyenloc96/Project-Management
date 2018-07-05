import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css'],
    providers: [AppService]
})
export class ViewAllUsersComponent implements OnInit {
  listUsers = [];
  numberItemsPage = 10;
  counts = 0;
  constructor(
      private appService: AppService,
      private router: Router
  ) {
    this.appService.sendGetCountUsers().then(result => {
        this.counts = result;
    });
    this.getDataPaging(1, this.numberItemsPage);
  }

  ngOnInit() {
  }

    pageChanged($event) {
        this.getDataPaging($event, this.numberItemsPage);
    }
    getDataPaging(from, offset) {
        this.appService.sendGetDataPagingUsers(from, offset).then(result => {
            var arr3 = Object.keys(result).map(function(key) {
                return [key, result[key]];
            });
            this.listUsers = arr3;
        })
    }

}
