import { Component, OnInit } from '@angular/core';

import { Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms'


@Component({
    selector: 'app-input-container',
    templateUrl: './input.component.html'
})
export class InputComponent implements OnInit , AfterContentInit {

    input: any;

    @ContentChild(FormControlName) control: FormControlName;

    constructor() { }

    ngAfterContentInit() {

        this.input = this.control;

        if (this.input === undefined) {
            throw new Error('Esse componente precisa ser usado com uma diretiva formControlName');
        }

    }

    ngOnInit() {
    }

    hasError(): boolean {
        console.log(`HASERROR: ${this.control.invalid}`);
        return this.input.invalid && (this.input.dirty || this.input.touched);
    }

    hasSuccess(): boolean {
        console.log(`HASSUCCESS: ${this.control.valid}`);
        return this.input.valid && (this.input.dirty || this.input.touched);
    }

}
