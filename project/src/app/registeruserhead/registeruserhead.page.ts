import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registeruserhead',
  templateUrl: './registeruserhead.page.html',
  styleUrls: ['./registeruserhead.page.scss'],
})
export class RegisteruserheadPage implements OnInit {

  id_userhead: string;
  usernamehead: string;
  passwordhead: string;
  namehead: string;
  emailhead: string;
  telhead: string;

  data = { "id_userhead": "", "usernamehead": "", "passwordhead": "", "namehead": "", "emailhead": "", "telhead": "" };
 

 
  constructor(public router: Router, public callapi: ApiService) { }

  ngOnInit() {
  }
   addUserHead() {
    this.data.id_userhead = this.id_userhead;
    this.data.usernamehead = this.usernamehead;
    this.data.passwordhead = this.passwordhead;
    this.data.namehead = this.namehead;
    this.data.emailhead = this.emailhead;
    this.data.telhead = this.telhead;
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.data));
    dataFrom.append("Function_Name", "addUserHead");
    this.callapi.system_process_db(dataFrom).then((result) => {
  
      console.log("success");
      
    });
  }


}
