import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.page.html',
  styleUrls: ['./registeruser.page.scss'],
})
export class RegisteruserPage implements OnInit {

  constructor(public router: Router, public callapi: ApiService) { }

  ngOnInit() {
  }
  id_user: string;
  username_user: string;
  password_user: string;
  name_user: string;
  email_user: string;
  tel_user: string;
  data = { "id_user": "", "username_user": "", "password_user": "", "name_user": "", "email_user": "", "tel_user": "" };
  addUser() {
    this.data.id_user = this.id_user;
    this.data.username_user = this.username_user;
    this.data.password_user = this.password_user;
    this.data.name_user = this.name_user;
    this.data.email_user = this.email_user;
    this.data.tel_user = this.tel_user;
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.data));
    dataFrom.append("Function_Name", "addUser");
    this.callapi.system_process_db(dataFrom).then((result) => {
      console.log("success");
    });
  }
}
