import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {

        this.loginForm = this.fb.group({
            user: this.fb.control('', [Validators.required]) ,
            password: this.fb.control('', [Validators.required])
        })

    }

    criarConta(): void{

    }

    login(): void{

    }

}
