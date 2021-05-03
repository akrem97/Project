import { Component, OnInit } from '@angular/core';
import { QuiService } from '../qui.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Myform: FormGroup ; 
  constructor(private contactservice:QuiService ,
    private Fb:FormBuilder ) {
      let formcontrols={
        name :new FormControl(),
        email : new FormControl(),
        message :  new FormControl(),
      }
      this.Myform=this.Fb.group(formcontrols); }
  ngOnInit(): void {
  }
  contactpost(){
    const usercord  : any = {
      'name':this.Myform.value.name, 
      'email':this.Myform.value.email,
      'message':this.Myform.value.message
     };
     console.log(usercord)
    this.contactservice.contactpost(usercord).subscribe(()=>{
      console.log("done ! ")
    })  }
     

}
