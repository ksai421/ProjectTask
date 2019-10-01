import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  details: any;
  emplye: any;

  constructor(private http: DataService) { }

  ngOnInit() {

    return this.http.get().subscribe((res) => {
      this.details = res
      console.log("user", this.details);
    });
  }
  button(emd){
  
   this.emplye=emd;
   console.log(emd)
  }
}
