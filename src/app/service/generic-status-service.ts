import { Status } from '../model/status';
import { Subject, BehaviorSubject, Observable, of } from 'rxjs';
import { IService } from './i-service';
import { DropdownOption } from '../model/dropdownoption';
import { map } from 'rxjs/operators';

export abstract class GenericStatusService implements IService {
    history: Status[];
    historySubject: Subject<Status[]>;
    statusDropdownOptions: DropdownOption[];

    get getDropDownOption(): Observable<DropdownOption[]> {
        if (this.statusDropdownOptions != null)
            return of(this.statusDropdownOptions);
        else return this.getDropdownHttp();
    }

    abstract getDropdownHttp(): Observable<DropdownOption[]>;

    public get getLastKnownStatus(): Observable<number> {
        return this.historySubject.asObservable().pipe(
            map((x: Status[]) => {
                var mostRecentDate = Math.max.apply(
                    null,
                    x.map((e: Status) => {
                        return e.timestamp;
                    })
                );
                var mostRecentStatus = x.find(
                    (x) =>
                        new Date(x.timestamp).getTime() ==
                        new Date(mostRecentDate).getTime()
                );
                return mostRecentStatus ? mostRecentStatus.status : 0;
            })
        );
    }

    constructor() {
        this.historySubject = new BehaviorSubject<Status[]>([]);
        this.history = [];
    }

    public add(newStatus: Status) {
        newStatus.timestamp = new Date();
        this.history.push(newStatus);
        this.historySubject.next(this.history);
    }
}
