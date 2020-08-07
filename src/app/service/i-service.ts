import { Status } from '../model/status';
import { Subject, Observable } from 'rxjs';
import { DropdownOption } from '../model/dropdownoption';

export interface IService {
    historySubject: Subject<Status[]>;
    add(newStatus: Status);
    getDropDownOption: Observable<DropdownOption[]>;
    getLastKnownStatus: Observable<number>
}
