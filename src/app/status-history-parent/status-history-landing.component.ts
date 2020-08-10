import { Component } from '@angular/core';
import { DbstatusserviceService } from '../service/dbstatusservice.service';
import { ManagerstatusserviceService } from '../service/managerstatusservice.service';

@Component({
  selector: 'app-status-history-landing',
  templateUrl: './status-history-landing.component.html',
  styles: [
    `
    * {
      box-sizing: border-box;
      }
      
      /* Create two equal columns that floats next to each other */
      .column {
          float: left;
          width: 300px;
          padding: 10px;
          height: 300px;
          flex-wrap: wrap;
      }
      
      /* Clear floats after the columns */
      .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
      }
      
      @media only screen and (min-width: 768px) {
          .row {
              display: flex;
          }
      
          .column {
              flex: 50%;
          }
      }
    `
  ]
})
export class StatusHistoryLandingComponent {
  constructor(public dbStatusService: DbstatusserviceService,
    public managerStatusService: ManagerstatusserviceService
    ){
  }

}
