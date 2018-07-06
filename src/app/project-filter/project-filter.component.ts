import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrls: ['./project-filter.component.css'],
  providers: [AppService]
})
export class ProjectFilterComponent implements OnInit {
  listProjects = [];
  maxpage = 0;
  numberItemsPage = 10;
  form ={field:"",
         name:"",
        index_of_page:1
        };
  constructor(
    private appService: AppService,
    private router: Router 
  ) {
      this.form.field = localStorage.getItem('field');
      this.form.name = localStorage.getItem('name');
      
      this.appService.sendPostProjectFilterPage(this.form).then(result =>{
        this.maxpage = result.number;
      }).catch(error => console.log(error))

      this.appService.sendProjectFilter(this.form).then(result =>{
        var arr = Object.keys(result).map(function(key) {
          return [Number(key), result[key]];
        })
        this.listProjects = arr;
      }).catch(error => console.log(error)) 

      
   }

  ngOnInit() {
  }

  pageChanged($event) {
    this.getDataPaging($event);
 }
 

getDataPaging(index_of_page) {
  this.form.index_of_page = index_of_page;
  this.appService.sendProjectFilter(this.form).then(result => {
    var arr = Object.keys(result).map(function(key) {
      return [Number(key), result[key]];
    })
    this.listProjects = arr;
  }).catch(error => console.log(error)) 
}

}
