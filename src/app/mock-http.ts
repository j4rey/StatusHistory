import { Injectable } from '@angular/core';
import { Status } from './model/status';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DropdownOption } from './model/dropdownoption';

@Injectable({
    providedIn: 'root',
})
export class MockHttpClient {
    constructor() {}

    getHistory(): Observable<Status[]> {
        return of([
            {
                comments: 'DB 1',
                status: 1,
                timestamp: new Date(),
            } as Status,
        ]).pipe(delay(1000));
    }

    getDBStatus(): Observable<DropdownOption[]> {
        return of([
            new DropdownOption(1, 'Pending'),
            new DropdownOption(2, 'Rejected'),
            new DropdownOption(3, 'Approved'),
        ]).pipe(delay(1000));
    }

    getManagerHistory(): Observable<Status[]> {
        return of([
            {
                comments: 'Manager 2',
                status: 2,
                timestamp: new Date(),
            } as Status,
        ]);
    }
}
