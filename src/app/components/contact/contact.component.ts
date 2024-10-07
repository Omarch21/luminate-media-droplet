import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { Email } from 'src/app/models/email';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
emailForm!: FormGroup;
constructor(private formBuilder: FormBuilder, private emailService: EmailService){}
ngOnInit(){
  this.emailForm = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    phoneNumber: ['',Validators.required],
    subject: ['',Validators.required],
    body: ['',Validators.required],
 
  })
}
sendEmail(){
if(this.emailForm.valid){
  const email = new Email();
  email.firstName = this.emailForm.value.firstName
  email.lastName = this.emailForm.value.lastName

  email.from = this.emailForm.value.email;
  email.phoneNumber = this.emailForm.value.phoneNumber;
  email.subject = this.emailForm.value.subject;
  email.body = this.emailForm.value.body;

  this.emailService.sendEmail(email).subscribe(value=>{
    console.log("sent");
    const text = document.getElementById("email-button") as HTMLButtonElement;
    if(text){
      text.textContent = "Sent!";
      text.style.backgroundColor = "#DA3832";
      text.style.color = "white";
      text.disabled = true;
    }
  });
}
}
}
