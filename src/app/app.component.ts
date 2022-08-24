import { LowerCasePipe } from '@angular/common';
import { Component, } from '@angular/core';	
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'paltrackForm';
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

    

  ngOnInit() {
    // Form validation
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required,Validators.email]],
      password: ['',  [Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$")]],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESSFULLY LOGGED IN!!');
  }
}