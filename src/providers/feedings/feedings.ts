import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FeedingsProvider {
  apiUrl = "http://localhost:8080";
  data: any;
  constructor(public http: HttpClient) {    
  }

  getFeedings(){
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/api/feedings')
      .subscribe(data => {
        resolve(this.data);
      }, err => {
        console.log(err);
      });
    });
  }

  createFeeding(feeding) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/api/feedings', JSON.stringify(feeding))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

 /* deleteFeeding(id){
    this.http.delete('http://localhost:8080/api/feedings/' + id).subscribe((res) => {
      console.log(res);
    })
  }*/

}
