import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  companyDescription: String = "";
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/pageObject.json').subscribe(pageObj => {
      this.companyDescription = pageObj["contentText"].companyDescription;
    });
  }
}
