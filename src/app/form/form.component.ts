import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ReCaptchaV3Service } from 'ngx-captcha';
import { HttpClient } from '@angular/common/http';
import { ResponseRecaptha } from '../model/ResponseGoogle';
import { KeysGoogle } from '../model/KeysGoogle';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

  chaves:KeysGoogle = new KeysGoogle(); 
  aFormGroup: FormGroup;
  msgToken:string = "";
  
  msgTokenInsussesso:string = "";
  msgToken2 = [];
  submitted = false;
 // produto:string = "xx";
  //preco:string = "xx";

  constructor(private reCaptchaV3Service: ReCaptchaV3Service,
              private formBuilder: FormBuilder,
              private http: HttpClient) { }

  ngOnInit() { 
    this.aFormGroup = this.formBuilder.group({
      produto:['', Validators.required],
      preco:['', Validators.required]
    });

    //this.aFormGroup.get('produto').setValue('Blue ray');
    //this.aFormGroup.get('preco').setValue('1000');
    }

  get f(){ return this.aFormGroup.controls; }
    
    
  onSubmit(){
    this.submitted = true;

    if(this.aFormGroup.invalid){
      this.msgToken = '';
      return;
    }
 else{
  this.reCaptchaV3Service.execute(this.chaves.key , 'homepage', (token) => {
    this.msgToken = "";
    this.msgTokenInsussesso = "";
    this.http.post<ResponseRecaptha>('http://localhost:3000/enviaTokenGoogle', {'g-recaptcha-response': token})
      .subscribe(res => {
        let responseRecaptha = res;
         
        if(responseRecaptha.score >= 0.5){
            this.msgToken = `Score: ${responseRecaptha.score} (Teste Ok)`;
            
            }
        else{
            this.msgTokenInsussesso = `Score: ${responseRecaptha.score} (Solicitação duvidosa)`;
        }    

       
      })


    }, {
     useGlobalDomain: false
    });
 }
}




}

