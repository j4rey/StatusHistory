import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IService } from 'src/app/service/i-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { IAddStatus } from '../i-add-status';
import { Subscription, Observable } from 'rxjs';
import { DropdownOption } from 'src/app/model/dropdownoption';

@Component({
    selector: 'app-add-status-two',
    templateUrl: './add-status-two.component.html',
    styleUrls: ['./add-status-two.component.scss'],
})
export class AddStatusTwoComponent implements OnInit, IAddStatus, OnDestroy {
    @Input() service: IService;
    form: FormGroup;
    getDropDownOption$: Observable<DropdownOption[]>
    formSubscription: Subscription;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            status: [''],
            comments: [''],
        });
    }

    ngOnInit(): void {
        this.formSubscription = this.form
            .get('status')
            .valueChanges.pipe(
                map((x: number) => x),
                switchMap((x) =>
                    this.service.getLastKnownStatus.pipe(map((y) => x == y))
                )
            )
            .subscribe((matched: boolean) => {
                if (matched) {
                    this.form
                        .get('comments')
                        .setValidators([Validators.required]);
                } else {
                    this.form.get('comments').setValidators([]);
                }
                this.form.get('comments').updateValueAndValidity();
                this.form.updateValueAndValidity();
            });
    }

    ngOnDestroy(): void {
        this.formSubscription.unsubscribe;
        this.formSubscription = null;
    }

    onSubmit() {
        if (this.form.valid) {
            this.service.add({...this.form.value, ...{timestamp: new Date(Date.now())}});
            this.form.reset();
        } else {
            alert('comments is required');
        }
    }

    setService(service: IService) {
        this.service = service;
        this.getDropDownOption$ = this.service?.getDropDownOption;
    }
}
