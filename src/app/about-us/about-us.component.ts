import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {

  aboutText: String;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/pageObject.json').subscribe(pageObj => {
      this.aboutText = pageObj["contentText"].aboutUs;
    });
  }

}
