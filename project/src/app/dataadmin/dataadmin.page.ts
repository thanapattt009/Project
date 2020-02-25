import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dataadmin',
  templateUrl: './dataadmin.page.html',
  styleUrls: ['./dataadmin.page.scss'],
})
export class DataadminPage implements OnInit {

  listadmin;

  dataadmin = { "id_admin": "", "nameadmin": "", "emailadmin": "", "teladmin": "" }

  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) { }

  ngOnInit() {
    this.getAdminAll();
  }

  getAdminAll() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getAdminAll");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.listadmin = result;
      console.log(result);
      console.log(this.listadmin);

    });

  }

}
