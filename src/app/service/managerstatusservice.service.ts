import { Injectable } from '@angular/core';
import { GenericStatusService } from './generic-status-service';
import { MockHttpClient } from '../mock-http';

@Injectable({
    providedIn: 'root',
})
export class ManagerstatusserviceService extends GenericStatusService {
    constructor(httpClient: MockHttpClient) {
        super();
        httpClient.getDBStatus().subscribe((x) => {
            this.dropdownSubject.next(x);
        });
        httpClient.getHistory().subscribe((x) => {
            this.historySubject.next(x);
        });
    }
}
