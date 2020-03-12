import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.sass']
})
export class PageSectionComponent implements OnInit {

  @Input('bg-image') imageUrl: String = "";
  @Input('title') sectionTitle: String;

  constructor() { }

  ngOnInit() {
    this.sectionTitle = this.sectionTitle.toUpperCase();
  }

}
