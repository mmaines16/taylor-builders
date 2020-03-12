import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-static-banner',
  templateUrl: './static-banner.component.html',
  styleUrls: ['./static-banner.component.sass']
})
export class StaticBannerComponent implements OnInit {

  @Input('bannerImage') imageUrl: String;

  constructor() { }

  ngOnInit() {
  }
}
