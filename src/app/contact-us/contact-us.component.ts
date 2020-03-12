import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {

  email: String = "";
  phone: String = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/pageObject.json').subscribe(pageObj => {
      this.email = pageObj["contactInfo"].email;
      this.phone = pageObj["contactInfo"].phone;
    });
  }

}
