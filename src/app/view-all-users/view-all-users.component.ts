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
  selectField = 'All';
    value_filter = '';
    field = [{"name":"All", "value":"All"},
        {"name":"ID User", "value":"user_id"},
        {"name":"UserName", "value":"username"},
       
        {"name":"Job", "value":"job"}];

  constructor(
      private appService: AppService,
      private router: Router
  ) {
    this.appService.sendGetCountUsers(this.selectField, this.value_filter.trim()).then(result => {
        this.counts = result;
    });
    this.getDataPaging(1, this.numberItemsPage, this.selectField, this.value_filter.trim());
  }

  ngOnInit() {
  }

    pageChanged($event) {
        this.getDataPaging($event, this.numberItemsPage, this.selectField, this.value_filter.trim());
    }
    getDataPaging(from, offset, selectedField, value_filter) {
        this.appService.sendGetDataPagingUsers(from, offset, selectedField, value_filter).then(result => {
            var arr3 = Object.keys(result).map(function(key) {
                return [key, result[key]];
            });
            this.listUsers = arr3;
        });
    }

    onSubmit(form) {
      this.listUsers = [];
      this.counts = 0;

        this.appService.sendGetCountUsers(this.selectField, this.value_filter.trim()).then(result => {
            this.counts = result;
        });
        this.getDataPaging(1, this.numberItemsPage, this.selectField, this.value_filter.trim());
    }

}
