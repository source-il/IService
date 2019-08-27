import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-servicecall',
  templateUrl: './servicecall.component.html',
  styleUrls: ['./servicecall.component.css']
})
export class ServicecallComponent implements OnInit {
  servicecall: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getServiceCalls();
  }

  getServiceCalls() {
    this.http.get('http://localhost:5000/api/servicecall').subscribe(response => {
        this.servicecall = response;
      }, error => {
        console.log(error);
      });
  }

}
