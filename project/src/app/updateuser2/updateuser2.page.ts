import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updateuser2',
  templateUrl: './updateuser2.page.html',
  styleUrls: ['./updateuser2.page.scss'],
})
export class Updateuser2Page implements OnInit {

  ans = {
    'id_user': "", 'username_user': "", 'password_user': "", 'name_user': "", 'email_user': "", 'tel_user': ""
  }

  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) {    this.ans.id_user = this.active.snapshot.paramMap.get('_id');
  console.log(this.ans);
  this.getByIdUser();
}

ngOnInit() {
  this.getByIdUser();
}

getByIdUser() {
  let dataFrom = new FormData();
  dataFrom.append("_Data", JSON.stringify(this.ans));
  dataFrom.append("Function_Name", "getByIdUser");
  this.callapi.system_process_db(dataFrom).then((result) => {
    this.ans = result[0];
    console.log(this.ans);
  });
}

updateUser(id) {
  this.ans.id_user = id;
  console.log(this.ans);


  let dataFrom = new FormData();
  dataFrom.append("_Data", JSON.stringify(this.ans));
  dataFrom.append("Function_Name", "updateUser");
  console.log(this.ans);
  this.callapi.system_process_db(dataFrom).then((result) => {
    console.log(result);
    this.router.navigate(['/datauser', { _id: id }]);
  });
}
}
