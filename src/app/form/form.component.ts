import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ReCaptchaV3Service } from 'ngx-captcha';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

  siteKey = '6LftCZEUAAAAAGMpTzqFZZXkf3IXMuK8rpIM1Jyx';
  aFormGroup: FormGroup;
  msgToken:string = "";
  msgToken2 = [];
  
  constructor(private reCaptchaV3Service: ReCaptchaV3Service,
              private formBuilder: FormBuilder,
              private http: HttpClient) { }

  ngOnInit() { 
    this.aFormGroup = this.formBuilder.group({
      produto:['', Validators.required],
      preco:['', Validators.required]
    });

    }

 
 cadastrar(){
  
    if(this.aFormGroup.invalid){
      this.msgToken = `Todos os daddos são obrigatórios`;

    }
 else{
  this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
    this.msgToken = token;
    this.http.post('http://localhost:3000/enviaTokenGoogle', {'g-recaptcha-response': token})
      .subscribe(res => {
          console.log(res);
      })


    }, {
     useGlobalDomain: false
    });
 }
}

cadastrar2(){
  
  if(this.aFormGroup.invalid){
    this.msgToken = `Todos os daddos são obrigatórios`;

  }
else{
  try {
    this.reCaptchaV3Service.execute("6LfchpEUAAAAAGUvLbXFayplmN-0OeAbMv2jPxxS", 'homepage', (token) => {
      this.msgToken = token;
      this.http.post('http://localhost:3000/enviaTokenGoogle', {'g-recaptcha-response': token})
        .subscribe(res => {
            console.log(res);
        })
      }, {
       useGlobalDomain: false
      });
  } catch(err) {
    console.log(err);
  }
}
}

}
