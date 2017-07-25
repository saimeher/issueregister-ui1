import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { GenericValidator } from '../common/generic-validator';
import { AuthenticationService } from '../services/authentication.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';

@Component({
  selector: 'app-applogin',
  templateUrl: './applogin.component.html',
  styleUrls: ['./applogin.component.css']
})
export class ApploginComponent implements OnInit {
  loginform: FormGroup;
  displayMessage;
  private validationMessages;
  private genericValidator: GenericValidator;
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
   error = false;
  errorMessage = '';
  isRequesting = false;
  buttonClicked = false;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public authenticationservice: AuthenticationService) {
      this.validationMessages = {
      username: {
        required: 'username is required'
      },
      password: {
        required: 'password is required'
      }
    };
     }

  ngOnInit() {
     console.log('init');
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.loginform = this.fb.group({
      'username': ['', [Validators.required]],
      'password': ['', [Validators.required]]
       // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    });
  }

  ngAfterViewInit(): void {
    if (this.loginform) {
      const controlBlurs: Observable<any>[] = this.formInputElements
        .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));
      Observable.merge(this.loginform.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
        this.displayMessage = this.genericValidator.processMessages(this.loginform);
      });
    }
  }

  login()
  {
  this.error = false;
    this.errorMessage = '';
    this.buttonClicked = true;
    if (this.loginform.valid) {
      this.isRequesting = true;
      this.authenticationservice.login(
        this.loginform.controls['username'].value,
        this.loginform.controls['password'].value
      )
        .subscribe(data => {
          if (data.success) {
            
            this.loginform.reset();
            this.errorMessage = 'Form successful Sent.';
            localStorage.setItem('username',data.username);
            this.router.navigate(['new']);
          } else {
            this.error = true;
            this.errorMessage = data.error;
          }
          this.isRequesting = false;
          this.buttonClicked = false;
        });
    } else {
      this.error = true;
      this.errorMessage = ' Please make sure to enter all the fields';
    }

}
}
