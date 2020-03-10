import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.page.html',
  styleUrls: ['./updateuser.page.scss'],
})
export class UpdateuserPage implements OnInit {

  id = {
    'id_user': null
  };
  ans = {
    'id_user': "", 'username_user': "", 'password_user': "", 'name_user': "", 'email_user': "", 'tel_user': ""
  }

  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) { 
    this.id.id_user = this.active.snapshot.paramMap.get('_id');
    console.log(this.id);
    this.getbyidUser();
  }

  ngOnInit() {
    this.getbyidUser();
  }

  getbyidUser() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.id));
    dataFrom.append("Function_Name", "getByIdUser");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.ans = result[0];
      console.log(this.ans);
    });
  }

  updateUser(id) {
    this.ans.id_user = id;
    console.log(this.ans);
    console.log(this.id);

    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.ans));
    dataFrom.append("Function_Name", "updateUser");
    // console.log(this.ans);
    this.callapi.system_process_db(dataFrom).then((result) => {
      console.log(result);
      this.router.navigate(['/datauser'])
    });
  }
}
