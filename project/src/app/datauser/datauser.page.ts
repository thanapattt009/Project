import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-datauser',
  templateUrl: './datauser.page.html',
  styleUrls: ['./datauser.page.scss'],
})
export class DatauserPage implements OnInit {
  listUser;
  listuser;

  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) { }

  ngOnInit() {
    // this.getUserAll();
  }

  ionViewWillEnter() {
    this.getByIdUser();
  }
  getidU(id) {
    this.router.navigate(['/updateuser', { _id: id }]);
  }

  getByIdUser() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.callapi.userId));
    dataFrom.append("Function_Name", "getByIdUser");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.listUser = result;
      console.log(result);
      console.log(this.listUser);

    });

  }

}