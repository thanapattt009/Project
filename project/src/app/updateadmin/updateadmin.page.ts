import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.page.html',
  styleUrls: ['./updateadmin.page.scss'],
})
export class UpdateadminPage implements OnInit {



  ans = {
    'id_admin': "", 'usernameadmin': "", 'passwordadmin': "", 'nameadmin': "", 'emailadmin': "", 'teladmin': ""
  }

  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) { 
    this.ans.id_admin = this.active.snapshot.paramMap.get('_id');
    console.log(this.ans);
    this.getbyidAdmin();
  }

  ngOnInit() {
    this.getbyidAdmin();
  }

  getbyidAdmin() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.ans));
    dataFrom.append("Function_Name", "getByIdAdmin");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.ans = result[0];
      console.log(this.ans);
    });
  }

  updateAdmin(id) {
    this.ans.id_admin = id;
    console.log(this.ans);


    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.ans));
    dataFrom.append("Function_Name", "updateAdmin");
    console.log(this.ans);
    this.callapi.system_process_db(dataFrom).then((result) => {
      console.log(result);
      this.router.navigate(['/dataadmin' , { _id: id }]);
    });
  }
}
