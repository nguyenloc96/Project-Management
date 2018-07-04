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
  constructor(
      private appService: AppService,
      private router: Router
  ) {
    this.appService.sendGetCountLogTimeSheet().then(result => {
      this.countsItem = result;
    });
    this.getDataPaging(0, 10);
  }

  ngOnInit() {
  }

    pageChanged($event) {
        this.getDataPaging($event * this.numberItemsPage, this.numberItemsPage);
    }
    getDataPaging(from, offset) {
      this.appService.sendGetDataPagingLogTimeSheet(from, offset).then(result => {
          var arr3 = Object.keys(result).map(function(key) {
              return [key, result[key]];
          });
          this.listAllNotes = arr3;
          console.log(this.listAllNotes);
      })
    }
}
