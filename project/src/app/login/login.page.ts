import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  ans = {
    'id_admin': "", 'usernameadmin': "", 'passwordadmin': "", 'nameadmin': "", 'emailadmin': "", 'teladmin': ""
  }

  ans2 = {
    'id_user': "", 'username_user': "", 'password_user': "", 'name_user': "", 'email_user': "", 'tel_user': ""
  }

  ans3 = {
    'id_userhead': "", 'usernamehead': "", 'passwordhead': "", 'namehead': "", 'emailhead': "", 'telhead': ""
  }



  checklogin = {
    'usernameadmin': "", 'passwordadmin': ""
  }

  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) { }

  ngOnInit() {
  }

  checkloginadmin() {
    console.log(this.checklogin);
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.checklogin));
    dataFrom.append("Function_Name", "checkloginadmin");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.ans = result[0]
      // console.log(result);
      console.log(this.ans);
      // this.callapi.userId = this.ans.id_admin;
      // console.log(this.ans.id_admin);
      if (Object.keys(result).length != 0) {
        console.log("adminlogin");

        this.router.navigate(['/dataadmin'])

      }

    });

    console.log(this.checklogin);
    let dataFrom1 = new FormData();
    dataFrom1.append("_Data", JSON.stringify(this.checklogin));
    dataFrom1.append("Function_Name", "checkloginuser");
    this.callapi.system_process_db(dataFrom1).then((result) => {
      this.ans2 = result[0]
      console.log(this.ans2);
      // console.log(this.checklogin);
      // this.callapi.userId = this.ans.id_admin;
      // console.log(this.ans.id_admin);

      if (Object.keys(result).length != 0) {
        console.log("userlogin");

        this.router.navigate(['/datauser'])

      }

    });

    console.log(this.checklogin);
    let dataFrom3 = new FormData();
    dataFrom3.append("_Data", JSON.stringify(this.checklogin));
    dataFrom3.append("Function_Name", "checkloginuserHead");
    this.callapi.system_process_db(dataFrom3).then((result) => {
      this.ans3 = result[0]
      console.log(this.ans3);
      // console.log(this.checklogin);
      // this.callapi.userId = this.ans.id_admin;
      // console.log(this.ans.id_admin);

      if (Object.keys(result).length != 0) {
        console.log("userheadlogin");

        // this.router.navigate(['/dataadmin'])

      }

    });

  }
}
