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

  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) { }

  ngOnInit() {
    this.getUserAll();
  }

  getUserAll() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getUserAll");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.listuser = result;
      console.log(result);
      console.log(this.listuser);

    });

  }

}