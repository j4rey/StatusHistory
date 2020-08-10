import { Component, Input } from '@angular/core';
import { IService } from 'src/app/service/i-service';
import { Status } from 'src/app/model/status';
import {map } from 'rxjs/operators';
import { IGridHistory } from '../../add-status/i-add-status';
import { Observable } from 'rxjs';
import { DropdownOption } from 'src/app/model/dropdownoption';

@Component({
  selector: 'app-status-grid',
  templateUrl: './status-grid.component.html',
  styleUrls: ['./status-grid.component.scss']
})
export class StatusGridComponent implements IGridHistory {
  @Input() public service: IService;
  statusObs$:Observable<Status[]>;
  getDropDownOption$: Observable<DropdownOption[]>;

  constructor() { }

  setService(service: IService) {
    this.service = service;
    this.statusObs$ = this.service?.getHistory.pipe(
      map((x:Status[])=>{
        x = x.sort((a:Status, b:Status)=>{
          return a.timestamp > b.timestamp?-1:1;
        });
        return x; 
      })
    );
    this.getDropDownOption$ = this.service?.getDropDownOption;
  }

  trackByFn(index, item) {
    return item.timestamp; // or item.id
  }
}
