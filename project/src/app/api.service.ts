import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let apiUrl = "http://localhost:80/NewProject/Project/Database/";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public http:HttpClient) { }


  system_process_db(_obj) {
    console.log("Success => ", _obj)   
    return new Promise((resolve, reject) => {
      this.http.post(apiUrl + 'system_process_db.php', _obj).
        subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });

    })
  }
}
