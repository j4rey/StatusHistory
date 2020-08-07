import { Component, OnInit, Input } from '@angular/core';
import { IService } from 'src/app/service/i-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { IAddStatus } from '../i-add-status';

@Component({
    selector: 'app-add-status-two',
    templateUrl: './add-status-two.component.html',
    styleUrls: ['./add-status-two.component.scss'],
})
export class AddStatusTwoComponent implements OnInit, IAddStatus {
    @Input() service: IService;
    form: FormGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            status: [''],
            comments: [''],
        });
    }

    ngOnInit(): void {
        this.form
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

    onSubmit() {
        if (this.form.valid) {
            this.service.add(this.form.value);
            this.form.reset();
        } else {
            alert('comments is required');
        }
    }

    setService(service: IService) {
        this.service = service;
    }
}
