import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DropdownOption } from '../model/dropdownoption';
import { GenericStatusService } from './generic-status-service';
import { MockHttpClient } from '../mock-http';

@Injectable({
    providedIn: 'root',
})
export class ManagerstatusserviceService extends GenericStatusService {
    constructor(private httpClient: MockHttpClient) {
        super();
        this.history = [];
        httpClient.getHistory().subscribe((x) => {
            this.history = x;
            this.historySubject.next(this.history);
        });

        httpClient.getDBStatus().subscribe((x) => {
            this.statusDropdownOptions = x;
        });
    }

    getDropdownHttp(): Observable<DropdownOption[]> {
        return this.httpClient.getDBStatus();
    }
}
