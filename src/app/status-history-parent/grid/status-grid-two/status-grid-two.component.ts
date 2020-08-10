import { Component, Input } from '@angular/core';
import { IService } from 'src/app/service/i-service';
import { IGridHistory } from '../../add-status/i-add-status';
import { Observable } from 'rxjs';
import { Status } from 'src/app/model/status';

@Component({
  selector: 'app-status-grid-two',
  templateUrl: './status-grid-two.component.html',
  styleUrls: ['./status-grid-two.component.scss']
})
export class StatusGridTwoComponent implements IGridHistory {
  @Input() public service: IService;
  statusObs$:Observable<Status[]>

  constructor() { }
  setService(service: IService) {
    this.service = service;
    this.statusObs$ = this.service?.getHistory;
  }
  trackByFn(index, item) {
    return item.timestamp; // or item.id
  }
}
