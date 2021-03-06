import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-datauser',
  templateUrl: './datauser.page.html',
  styleUrls: ['./datauser.page.scss'],
})
export class DatauserPage implements OnInit {


  listuser;
  
  ans = {
    'id_user': "", 'username_user': "", 'password_user': "", 'name_user': "", 'email_user': "", 'tel_user': ""
  }

  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) { }

  ngOnInit() {
    // this.getUserAll();
  }
  ionViewWillEnter() {
    this.getUserAll();
  }
  getiduser(id) {
    this.router.navigate(['/updateuser2', { _id: id }]);
  }
  getUserAll() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.ans));
    dataFrom.append("Function_Name", "getUserAll");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.listuser = result;
      console.log(result);
      console.log(this.listuser);
    });
  }
  deleteUser(id) {
    this.ans.id_user = id;
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.ans));
    dataFrom.append("Function_Name", "deleteUser");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.router.navigate(['/datauser']);
      this.getUserAll();
    });
  }
}