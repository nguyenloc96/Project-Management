import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-user-notes',
    templateUrl: './user-notes.component.html',
    styleUrls: ['./user-notes.component.css'],
    providers: [AppService]
})

export class UserNotesComponent implements OnInit {
    arrNotes;

    constructor(
        private appService: AppService,
    ) { 
        
        this.appService.sendUserNotes(
            {
                'user_id': localStorage.getItem('user_id')
            }
        )
        .then(result => {
            console.log(result);
            this.arrNotes = result;
        })
        .catch(error => console.log(error))
    }

    ngOnInit() {
    }
}
