import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  listtimework;


  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public router: Router, public callapi: ApiService, public active: ActivatedRoute) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAlltimework();

  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  getAlltimework() {
    let dataFrom = new FormData();
    dataFrom.append("_Data", JSON.stringify(""));
    dataFrom.append("Function_Name", "getAlltimework");
    this.callapi.system_process_db(dataFrom).then((result) => {
      this.listtimework = result;
      console.log(result);
      console.log(this.listtimework);

    });

  }

}
