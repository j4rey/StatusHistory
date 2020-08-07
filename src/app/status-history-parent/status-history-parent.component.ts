import { Component, Input, ContentChild, AfterContentInit } from '@angular/core';
import { IService } from '../service/i-service';
import { IAddStatus, IGridHistory } from './add-status/i-add-status';

@Component({
  selector: 'app-status-history-parent',
  templateUrl: './status-history-parent.component.html',
  styleUrls: ['./status-history-parent.component.scss']
})
export class StatusHistoryParentComponent implements AfterContentInit {
  @Input() service: IService;
  @ContentChild('addStatusRef') addStatus: IAddStatus;
  @ContentChild('iGridHistory') gridHistory: IGridHistory;
  constructor() { } 

  ngAfterContentInit(): void {
    this.addStatus.setService(this.service);
    this.gridHistory.service = this.service;
  }
}
