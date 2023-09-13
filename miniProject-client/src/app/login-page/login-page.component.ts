import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  loginForm!: FormGroup;

  private loginSvc?: LoginService;
  // private loginSvc = inject(LoginService);


  constructor(){};

  // constructor() {
    // this.loginSvc = inject(LoginService)
  // }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(24)]),

      loginPW: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(24)])

    });


  }




  onSubmit() {
    console.log(this.loginForm.value);

    this.loginSvc?.postLoginData(this.loginForm.value).subscribe(responseData => console.log(responseData));
// responseData.orderID to show data from Java ResponseEntity in Controller
// responseData => (responseData as any).orderID

    this.loginForm.reset();
  };


}



// SPring Dependencies Used
// https://start.spring.io/#!type=maven-project&language=java&platformVersion=3.1.3&packaging=jar&jvmVersion=17&groupId=sg.edu.nus.iss&artifactId=miniProject&name=miniProject&description=MiniProject&packageName=sg.edu.nus.iss.miniProject&dependencies=devtools,lombok,configuration-processor,docker-compose,web,thymeleaf,security,jdbc,data-jdbc,mysql,data-mongodb,validation
