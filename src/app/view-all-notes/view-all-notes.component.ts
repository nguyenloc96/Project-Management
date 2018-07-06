import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-view-all-notes',
  templateUrl: './view-all-notes.component.html',
  styleUrls: ['./view-all-notes.component.css'],
    providers: [AppService]
})
export class ViewAllNotesComponent implements OnInit {

  listAllNotes = [];
  numberItemsPage = 5;
  countsItem = 0;
  selectField = 'All';
  value_filter = '';
  field = ['All', 'username', 'projectName', 'role', 'type', 'hours'];

  constructor(
      private appService: AppService,
      private router: Router
  ) {
    this.appService.sendGetCountLogTimeSheet(this.selectField, this.value_filter.trim()).then(result => {
      this.countsItem = result;
    });
    this.getDataPaging(1, this.numberItemsPage, this.selectField, this.value_filter.trim());
  }

  ngOnInit() {
  }

    pageChanged($event) {
        this.getDataPaging($event, this.numberItemsPage, this.selectField, this.value_filter.trim());
    }
    getDataPaging(from, offset, selectedField, value_filter) {
      this.appService.sendGetDataPagingLogTimeSheet(from, offset, selectedField, value_filter).then(result => {
          var arr3 = Object.keys(result).map(function(key) {
              return [key, result[key]];
          });
          this.listAllNotes = arr3;
      });
    }

    onSubmit(form_filter) {
      this.listAllNotes = [];
      this.countsItem = 0;
      this.appService.sendGetCountLogTimeSheet(this.selectField, this.value_filter.trim()).then(result => {
        this.countsItem = result;
      });
      this.getDataPaging(1, this.numberItemsPage, this.selectField, this.value_filter.trim());
    }
}
