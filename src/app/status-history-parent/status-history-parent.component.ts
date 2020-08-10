import { Component, Input, ContentChild, AfterContentInit } from '@angular/core';
import { IService } from '../service/i-service';
import { IAddStatus, IGridHistory } from './add-status/i-add-status';
import { Observable } from 'rxjs';
import { DropdownOption } from '../model/dropdownoption';

@Component({
  selector: 'app-status-history-parent',
  templateUrl: './status-history-parent.component.html',
  styleUrls: ['./status-history-parent.component.scss']
})
export class StatusHistoryParentComponent implements AfterContentInit {
  @Input() service: IService;
  @ContentChild('addStatusRef') addStatus: IAddStatus;
  @ContentChild('iGridHistory') gridHistory: IGridHistory;

  getLastKnownStatus$:Observable<number>;
  getDropDownOption$:Observable<DropdownOption[]>
  
  constructor() { } 

  ngAfterContentInit(): void {
    this.addStatus.setService(this.service);
    this.gridHistory.setService(this.service)
    this.getLastKnownStatus$ = this.service?.getLastKnownStatus;
    this.getDropDownOption$ = this.service?.getDropDownOption;
  }
}
