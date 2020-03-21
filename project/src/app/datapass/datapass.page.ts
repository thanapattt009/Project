import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-datapass',
  templateUrl: './datapass.page.html',
  styleUrls: ['./datapass.page.scss'],
})
export class DatapassPage implements OnInit {

  constructor(public router: Router, public callapi: ApiService) { }

  ngOnInit() {
  }

  resuscitation: string;
  emergent: string;
  urgent: string;
  less_urgent: string;
  non_urgent: string;

  data = { "resuscitation": "", "emergent": "", "urgent": "", "less_urgent": "", "non_urgent": "" };

  addbutton(xxx) {
    console.log(xxx);

    
    if (xxx == "morning") {
      this.data.resuscitation = this.resuscitation;
      this.data.emergent = this.emergent;
      this.data.urgent = this.urgent;
      this.data.less_urgent = this.less_urgent;
      this.data.non_urgent = this.non_urgent;
      console.log(this.data);
      

      let dataFrom = new FormData();
      dataFrom.append("_Data", JSON.stringify(this.data));
      dataFrom.append("Function_Name", "addmorning");
      this.callapi.system_process_db(dataFrom).then((result) => {
        console.log("success");


      });
    }
    else if (xxx == "afternoon") {
      this.data.resuscitation = this.resuscitation;
      this.data.emergent = this.emergent;
      this.data.urgent = this.urgent;
      this.data.less_urgent = this.less_urgent;
      this.data.non_urgent = this.non_urgent;

      let dataFrom = new FormData();
      dataFrom.append("_Data", JSON.stringify(this.data));
      dataFrom.append("Function_Name", "addafternoon");
      this.callapi.system_process_db(dataFrom).then((result) => {

        console.log("success");

      });
    }
    else if (xxx == "late") {
      this.data.resuscitation = this.resuscitation;
      this.data.emergent = this.emergent;
      this.data.urgent = this.urgent;
      this.data.less_urgent = this.less_urgent;
      this.data.non_urgent = this.non_urgent;

      let dataFrom = new FormData();
      dataFrom.append("_Data", JSON.stringify(this.data));
      dataFrom.append("Function_Name", "addlate");
      this.callapi.system_process_db(dataFrom).then((result) => {

        console.log("success");

      });
    }
  }

}
