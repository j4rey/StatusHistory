import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IService } from 'src/app/service/i-service';
import { IAddStatus } from '../i-add-status';
import { DropdownOption } from 'src/app/model/dropdownoption';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-add-status-one',
    templateUrl: './add-status-one.component.html',
    styleUrls: ['./add-status-one.component.scss'],
})
export class AddStatusOneComponent implements IAddStatus {
    @Input() service: IService;
    form: FormGroup;
    getDropDownOption$: Observable<DropdownOption[]>;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            status: [''],
            comments: [''],
        });
    }

    onSubmit() {
        this.service.add({...this.form.value, ...{timestamp: new Date(Date.now())}});
    }

    setService(service: IService) {
        this.service = service;
        this.getDropDownOption$ = this.service?.getDropDownOption;
    }
}
