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

  resuscitation: number = 0;
  emergent: number = 0;
  urgent: number = 0;
  less_urgent: number = 0;
  non_urgent: number = 0;
  date_time: string;
  statustime: string;
  
  hour1: string;
  hour2: string;
  hour3: string;
  hour4: string;
  hour5: string;





  data = { "resuscitation": 0, "emergent": 0, "urgent": 0, "less_urgent": 0, "non_urgent": 0, "date_time": "", "statustime": "", "hour1": "", "hour2": "", "hour3": "", "hour4": "", "hour5": "" };
  data2 = { "id_timework": "", "resuscitation": 0, "emergent": 0, "urgent": 0, "less_urgent": 0, "non_urgent": 0, "date_time": "", "statustime": "", "hour1": "", "hour2": "", "hour3": "", "hour4": "", "hour5": "" };
  data3 = { "id_timework": "", "resuscitation": 0, "emergent": 0, "urgent": 0, "less_urgent": 0, "non_urgent": 0, "date_time": "", "statustime": "", "hour1": "", "hour2": "", "hour3": "", "hour4": "", "hour5": "" };

  datasum = { "hour1": 3.2, "hour2": 2.5, "hour3": 1, "hour4": 1, "hour5": 0.5 };


  addbutton() {
    // console.log(sum);
    console.log(this.date_time);
    var splitdate = this.date_time.split("T", 1);
    this.date_time = splitdate.toString();
    console.log(this.date_time);
    this.data.statustime = this.statustime;
    this.data.date_time = this.date_time;
    this.data.resuscitation = this.resuscitation;
    this.data.emergent = this.emergent;
    this.data.urgent = this.urgent;
    this.data.less_urgent = this.less_urgent;
    this.data.non_urgent = this.non_urgent;

    this.data.hour1 = this.hour1;
    this.data.hour2 = this.hour2;
    this.data.hour3 = this.hour3;
    this.data.hour4 = this.hour4;
    this.data.hour5 = this.hour5;



    console.log(this.data);




    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(this.data));
    dataFrom.append("Function_Name", "checkAllSelect");
    this.callapi.system_process_db(dataFrom).then((result) => {
      console.log(result);
      this.data2 = result[0];
      console.log(this.data2);
      if (Object.keys(result).length == 0) {
        console.log("insert");

        this.data.hour1 = (Number(this.data.resuscitation) * Number(this.datasum.hour1)).toString();
        this.data.hour2 = (Number(this.data.emergent) * Number(this.datasum.hour2)).toString();
        this.data.hour3 = (Number(this.data.urgent) * Number(this.datasum.hour3)).toString();
        this.data.hour4 = (Number(this.data.less_urgent) * Number(this.datasum.hour4)).toString();
        this.data.hour5 = (Number(this.data.non_urgent) * Number(this.datasum.hour5)).toString();

        console.log(this.data);

        // console.log(this.data);
        if(this.data.hour5 != ""){
          let dataFrom = new FormData();
          dataFrom.append("_Data", JSON.stringify(this.data));
          dataFrom.append("Function_Name", "AddtimeWork");
          this.callapi.system_process_db(dataFrom).then((result) => {
            console.log("success insert");
          });
        }
      } else {
        console.log("update");

        this.data3.id_timework = this.data2.id_timework;
        this.data3.resuscitation = Number(this.data.resuscitation) + Number(this.data2.resuscitation);
        this.data3.emergent = Number(this.data.emergent) + Number(this.data2.emergent);
        this.data3.urgent = Number(this.data.urgent) + Number(this.data2.urgent);
        this.data3.less_urgent = Number(this.data.less_urgent) + Number(this.data2.less_urgent);
        this.data3.non_urgent = Number(this.data.non_urgent) + Number(this.data2.non_urgent);

        this.data3.hour1 = (Number(this.data3.resuscitation) * Number(this.datasum.hour1)).toString();
        this.data3.hour2 = (Number(this.data3.emergent) * Number(this.datasum.hour2)).toString();
        this.data3.hour3 = (Number(this.data3.urgent) * Number(this.datasum.hour3)).toString();
        this.data3.hour4 = (Number(this.data3.less_urgent) * Number(this.datasum.hour4)).toString();
        this.data3.hour5 = (Number(this.data3.non_urgent) * Number(this.datasum.hour5)).toString();

        console.log(this.data3);


        let dataFrom = new FormData();
        dataFrom.append("_Data", JSON.stringify(this.data3));
        dataFrom.append("Function_Name", "Updatetimework");
        this.callapi.system_process_db(dataFrom).then((result) => {
          console.log("success update");
        });
      }



    });



    // if (sum != null) {
    //   this.data.resuscitation = this.resuscitation;
    //   this.data.emergent = this.emergent;
    //   this.data.urgent = this.urgent;
    //   this.data.less_urgent = this.less_urgent;
    //   this.data.non_urgent = this.non_urgent;

    // }


  }
}
