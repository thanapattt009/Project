import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updateuserhead',
  templateUrl: './updateuserhead.page.html',
  styleUrls: ['./updateuserhead.page.scss'],
})
export class UpdateuserheadPage implements OnInit {

  id = {
    'id_userhead': null
  };
  ans = {
    'id_userhead': "", 'usernamehead': "", 'passwordhead': "", 'namehead': "", 'emailhead': "", 'telhead': ""
  }

  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) { 
    this.id.id_userhead = this.active.snapshot.paramMap.get('_id');
    console.log(this.id);
    this.getbyidUserHead();
  }

  ngOnInit() {
  }

  getbyidUserHead() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.id));
    dataFrom.append("Function_Name", "getByIdUserHead");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.ans = result[0];
      console.log(this.ans);
    });
  }

  updateUserHead(id) {
    this.ans.id_userhead = id;
    console.log(this.ans);
    console.log(this.id);

    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.ans));
    dataFrom.append("Function_Name", "updateUserHead");
    // console.log(this.ans);
    this.callapi.system_process_db(dataFrom).then((result) => {
      console.log(result);
      this.router.navigate(['/home'])
    });
  }
}
