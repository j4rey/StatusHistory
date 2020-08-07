import { Injectable } from '@angular/core';
import { Status } from '../model/status';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { DropdownOption } from '../model/dropdownoption';
import { GenericStatusService } from './generic-status-service';
import { MockHttpClient } from '../mock-http';

@Injectable({
    providedIn: 'root',
})
export class DbstatusserviceService extends GenericStatusService {
    constructor(private httpClient: MockHttpClient) {
        super();
        this.historySubject = new BehaviorSubject<Status[]>([]);
        this.history = [];
        this.getDropdownHttp().subscribe((x) => {
            this.statusDropdownOptions = x;
        });
        this.httpClient.getHistory().subscribe((x) => {
            this.history = x;
            this.historySubject.next(this.history);
        });
    }

    getDropdownHttp(): Observable<DropdownOption[]> {
        return this.httpClient.getDBStatus();
    }
}
