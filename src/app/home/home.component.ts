import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  set:any;
  data:any;
  th:any;
  emply: any;
  constructor(private http: DataService) {

  }
  ngOnInit() {
    this.http.gets().subscribe(res => {
      this.set = res

      this.data = this.set.hits
      console.log("jdjajf", this.data)
    })
  }
  btn(details) {

    this.emply = details;
    console.log("empyedeatils", this.emply)
  }
}
