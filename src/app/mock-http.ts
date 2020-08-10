import { Injectable } from '@angular/core';
import { Status } from './model/status';
import { Observable, of } from 'rxjs';
import { tap, map, shareReplay } from 'rxjs/operators';
import { DropdownOption } from './model/dropdownoption';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MockHttpClient {
    constructor(private httpClient: HttpClient) {}

    getHistory(): Observable<Status[]> {
        console.log('MockHttpClient -> getHistory');
        return this.httpClient.get("https://jsonplaceholder.typicode.com/todos/1")
        .pipe(map(x=>{
                return [
                    {
                        comments: 'DB 1',
                        status: 1,
                        timestamp: new Date(),
                    } as Status,
                ];
        }));
    }

    private getDBHttpCall = this.httpClient.get("https://jsonplaceholder.typicode.com/todos/1")
    .pipe(
        tap(() => console.log('MockHttpClient ***SIDE EFFECT***')),
        map(x=> ([
        new DropdownOption(1, 'Pending'),
        new DropdownOption(2, 'Rejected'),
        new DropdownOption(3, 'Approved'),
        ]))
    );

    getDBStatus(): Observable<DropdownOption[]> {
        console.log('MockHttpClient -> getDBStatus');
        return this.getDBHttpCall.pipe(shareReplay());
    }

    getManagerHistory(): Observable<Status[]> {
        console.log('MockHttpClient -> getManagerHistory');
        return of([
            {
                comments: 'Manager 2',
                status: 2,
                timestamp: new Date(),
            } as Status,
        ]);
    }
}
