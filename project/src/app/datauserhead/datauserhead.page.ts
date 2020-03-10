import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-datauserhead',
  templateUrl: './datauserhead.page.html',
  styleUrls: ['./datauserhead.page.scss'],
})
export class DatauserheadPage implements OnInit {
  listuser;

  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) { }

  ngOnInit() {
    this.getUserHeadAll();
  }
  getidH(id) {
    this.router.navigate(['/updateuserhead', { _id: id }]);
  }
  getUserHeadAll() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getUserHeadAll");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.listuser = result;
      console.log(result);
      console.log(this.listuser);

    });

  }

}
