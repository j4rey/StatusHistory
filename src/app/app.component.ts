import { Component } from '@angular/core';
import { DbstatusserviceService } from './service/dbstatusservice.service';
import { ManagerstatusserviceService } from './service/managerstatusservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dbStatusService: DbstatusserviceService, public managerStatusService: ManagerstatusserviceService){
  }
}
