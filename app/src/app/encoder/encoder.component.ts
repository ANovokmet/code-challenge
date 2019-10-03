import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { EncodeRequest, RootState, selectResult, selectInput } from '../store';
import { EncodeModel } from '../core/models';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-encoder',
    templateUrl: './encoder.component.html',
    styleUrls: ['./encoder.component.less']
})
export class EncoderComponent implements OnInit {

    public model: EncodeModel = {
        input: ''
    };
    result$: Observable<string>;

    constructor(private store$: Store<RootState>) {
        this.result$ = this.store$.pipe(select(selectResult));
        store$.pipe(select(selectInput), take(1)).subscribe(input => {
            this.model.input = input;
        });
    }

    ngOnInit() {
    }

    submit() {
        this.store$.dispatch(new EncodeRequest({ data: { ...this.model } }));
    }

}
