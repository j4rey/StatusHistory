import { Component, OnInit } from '@angular/core';
import { GridService } from './grid.service';

@Component({
    selector: 'app-grid-landing',
    templateUrl: './grid-landing.component.html',
    styles: [],
})
export class GridLandingComponent implements OnInit {
    users$ = this.gridService.getUsers();
    actionOptions = [
        { id: 1, text: 'Approve', icon: 'user' },
        { id: 2, text: 'Reject', icon: 'email' },
        { id: 3, text: 'Edit', icon: 'group' },
        { id: 4, text: 'Clone', icon: 'runner' },
    ];

    constructor(public gridService: GridService) {}

    ngOnInit(): void {}

    onItemClick(e, row) {
        console.log({
            actionClicked: e.itemData,
            rowData: row.data,
        });
    }

    refreshGrid(){
      this.users$ = this.gridService.getUsers();
    }
}
