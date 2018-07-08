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
  maxpage = 0;
  index_of_filter_page = 1;
  index_of_page = 1;
  numberItemsPage =10;
  filter = false;
  form = {field:"PM",name:"",index_of_page:1};
  //counts = 0;
  fields = [
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
        // this.appService.sendGetAllProjects({"index_of_page": this.index_of_page})
        // .then(result => {
        //     var arr = Object.keys(result).map(function(key) {
        //         return [Number(key), result[key]];
        //     });
        //     this.listProjects = arr;
        // })
        //.catch(error => console.log(error))
        this.form.field = localStorage.getItem('field');
        this.form.name = localStorage.getItem('name');
        this.setLocalStorage();

        this.appService.sendProjectFilter(this.form)
        .then(result =>{
          var arr = Object.keys(result).map(function(key) {
            return [Number(key), result[key]];
          })
          this.listProjects = arr;
        }).catch(error => console.log(error))
        
        this.setMaxpage();
        this.getDataPaging(1);
       
      
        
    }

    ngOnInit() {
    }
    setMaxpage(){
      this.appService.sendPostProjectFilterPage(this.form).then(result => {
        this.maxpage = result.number;
      }).catch(error => console.log(error));

    }
    setLocalStorage(){
      localStorage.setItem('field',this.form.field);
      localStorage.setItem('name',this.form.name);

    }
    onSubmit(form) {
      this.form.field = form.value.field;
      this.form.name = form.value.name.trim();
      //alert(JSON.stringify(this.form));
      //this.setLocalStorage();
      this.setMaxpage();
      this.appService.sendProjectFilter(this.form).then(result => {
        var arr = Object.keys(result).map(function(key) {
          return [Number(key), result[key]];
        })
        this.listProjects = arr;
      }).catch(error => console.log(error)) 
      //localStorage.setItem('field',form.value.field);
      //localStorage.setItem('name',form.value.name);
    //  form.value.index_of_page = index;
      // this.form.field = form.value.field;
      // this.form.name = form.value.name;
      // if(!!this.form.name) this.filter = true;
      // else this.filter = false;
     // alert(this.filter);
      //alert(this.form);
      //alert(JSON.stringify(this.form));
     // alert(JSON.stringify(form.value));
      // this.appService.sendProjectFilter(form.value).then(result =>{
      //   var arr = Object.keys(result).map(function(key) {
      //     return [Number(key), result[key]];
      //    });
      //    this.listProjects = arr;
      // });
      // this.appService.sendPostProjectFilterPage(form.value).then(result =>{
      //   this.maxpage = result.number;
      // })
//this.router.navigate(['/project-filter']);
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

    
    
    // onClick(index){
    //   if(index !== 0 && index <= this.maxpage ){ 
    //     this.index_of_page = index;
    //     this.appService.sendGetAllProjects({"index_of_page": this.index_of_page})
    //       .then(result => {
    //           var arr = Object.keys(result).map(function(key) {
    //               return [Number(key), result[key]];
    //           });
    //           this.listProjects = arr;
    //       })
    //       .catch(error => console.log(error))
    //   }
    // }
}
