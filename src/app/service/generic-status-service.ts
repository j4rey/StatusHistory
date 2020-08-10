import { Status } from '../model/status';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { IService } from './i-service';
import { DropdownOption } from '../model/dropdownoption';
import { tap } from 'rxjs/operators';

export abstract class GenericStatusService implements IService {
    protected history: Status[]= [];
    protected historySubject: Subject<Status[]> = new BehaviorSubject<Status[]>([]);;
    getHistory: Observable<Status[]> = this.historySubject.pipe(tap(x=>{
        this.history = x;
        var mostRecentDate = Math.max.apply(
            null,
            this.history.map((e: Status) => {
                return e.timestamp;
            })
        );
        var mostRecentStatus = this.history.find(
            (y) =>
                new Date(y.timestamp).getTime() ==
                new Date(mostRecentDate).getTime()
        );
        this.getLastKnownStatus.next(mostRecentStatus ? mostRecentStatus.status : 0);
    }));
    protected dropdownSubject: Subject<DropdownOption[]> = new BehaviorSubject<DropdownOption[]>([]);
    getDropDownOption: Observable<DropdownOption[]> = this.dropdownSubject.asObservable();
    getLastKnownStatus: Subject<number> = new BehaviorSubject<number>(0);
    
    constructor() { }

    public add(newStatus: Status) {
        this.history.push(newStatus);
        this.historySubject.next(this.history);
    }
}
