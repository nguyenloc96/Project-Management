import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-get-all-project',
  templateUrl: './get-all-project.component.html',
  styleUrls: ['./get-all-project.component.css'],
  providers: [AppService]
})
export class GetAllProjectComponent implements OnInit {
  listProjects = [];
  selectField: string;
  maxpage: number;
  index_of_filter_page = 1;
  index_of_page = 1;
  field = [
    "project_id",
    "projectName",
    "PM",
    "customer",
    "technology",
    "status",
    "description",
    "notes"
  ]
  
    constructor(
      private appService: AppService,
      private router: Router 
    ) { 
        this.appService.sendGetAllProjects({"index_of_page": this.index_of_page})
        .then(result => {
            var arr = Object.keys(result).map(function(key) {
                return [Number(key), result[key]];
            });
            this.listProjects = arr;
        })
        .catch(error => console.log(error))
        this.appService.sendProjectPage()
        .then(result =>{
            this.maxpage = result.number/10;
            console.log(this.maxpage);
        }).catch(error => console.log(error))
    }

    ngOnInit() {
    }
    onSubmit(form) {
      form.value.index_of_page = 1;
      this.appService.sendProjectFilter(form.value).then(result =>{
        var arr = Object.keys(result).map(function(key) {
          return [Number(key), result[key]];
         });
         this.listProjects = arr;
      });
    }
    onClick(index){
      if(index !== 0 && index <= this.maxpage ){ 
        this.index_of_page = index;
        this.appService.sendGetAllProjects({"index_of_page": this.index_of_page})
          .then(result => {
              var arr = Object.keys(result).map(function(key) {
                  return [Number(key), result[key]];
              });
              this.listProjects = arr;
          })
          .catch(error => console.log(error))
      }
    }
}
