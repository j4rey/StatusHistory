import { Component, Input } from '@angular/core';
import { IService } from 'src/app/service/i-service';
import { Observable } from 'rxjs';
import { Status } from 'src/app/model/status';
import {map } from 'rxjs/operators';
import { IGridHistory } from '../../add-status/i-add-status';

@Component({
  selector: 'app-status-grid',
  templateUrl: './status-grid.component.html',
  styleUrls: ['./status-grid.component.scss']
})
export class StatusGridComponent implements IGridHistory {
  @Input() public service: IService;

  get statusObs():Observable<Status[]>{
    return this.service.historySubject.asObservable().pipe(
      map((x:Status[])=>{
        x = x.sort((a:Status, b:Status)=>{
          return a.timestamp > b.timestamp?-1:1;
        });
        return x; 
      })
    );
  }

  constructor() { }
}
