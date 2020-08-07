import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { IService } from 'src/app/service/i-service';
import { Observable } from 'rxjs';
import { Status } from 'src/app/model/status';
import { IGridHistory } from '../../add-status/i-add-status';

@Component({
  selector: 'app-status-grid-two',
  templateUrl: './status-grid-two.component.html',
  styleUrls: ['./status-grid-two.component.scss']
})
export class StatusGridTwoComponent implements IGridHistory {
  @Input() public service: IService;
  constructor() { }

  get statusObs():Observable<Status[]>{
    return this.service.historySubject.asObservable();
  }
}
