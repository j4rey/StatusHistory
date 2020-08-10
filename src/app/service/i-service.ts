import { Status } from '../model/status';
import { Observable } from 'rxjs';
import { DropdownOption } from '../model/dropdownoption';

export interface IService {
    getHistory: Observable<Status[]>;
    add(newStatus: Status):void;
    getDropDownOption: Observable<DropdownOption[]>;
    getLastKnownStatus: Observable<number>
}
