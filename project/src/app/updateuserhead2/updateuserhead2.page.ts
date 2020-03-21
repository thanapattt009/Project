import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updateuserhead2',
  templateUrl: './updateuserhead2.page.html',
  styleUrls: ['./updateuserhead2.page.scss'],
})
export class Updateuserhead2Page implements OnInit {
  ans = {
    'id_userhead': "", 'usernamehead': "", 'passwordhead': "", 'namehead': "", 'emailhead': "", 'telhead': ""
  }

  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) { 
    this.ans.id_userhead = this.active.snapshot.paramMap.get('_id');
    console.log(this.ans);
    this.getbyidUserHead();
  }

  ngOnInit() {
  }

  getbyidUserHead() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.ans));
    dataFrom.append("Function_Name", "getByIdUserHead");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.ans = result[0];
      console.log(this.ans);
    });
  }

  updateUserHead(id) {
    this.ans.id_userhead = id;
    console.log(this.ans);


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